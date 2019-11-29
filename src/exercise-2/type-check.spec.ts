"use strict";

import "mocha";

import { expect } from "chai";
import { type_check_v1, type_check_v2 } from "./type-check";

describe("type check", () => {
    describe("type check v1", () => {
        it("should throw an error when providing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => type_check_v1()).to.throw(Error);
            // @ts-ignore
            expect(() => type_check_v1("", "", "")).to.throw(Error);
        });

        it("should throw an error when providing something other than a string for the second argument", () => {
            // @ts-ignore
            expect(() => type_check_v1("", 1)).to.throw(TypeError);
        });

        it("should work for numbers", () => {
            expect(type_check_v1(1, "number")).to.be.true;
            expect(type_check_v1(1, "string")).to.be.false;
        });

        it("should work for strings", () => {
            expect(type_check_v1("", "string")).to.be.true;
            expect(type_check_v1("", "boolean")).to.be.false;
        });

        it("should work for booleans", () => {
            expect(type_check_v1(true, "boolean")).to.be.true;
            expect(type_check_v1(true, "object")).to.be.false;
        });

        it("should work for objects", () => {
            expect(type_check_v1({}, "object")).to.be.true;
            expect(type_check_v1({}, "null")).to.be.false;
        });

        it("shouls work for nulls", () => {
            expect(type_check_v1(null, "null")).to.be.true;
            expect(type_check_v1(null, "undefined")).to.be.false;
        });

        it("should work for undefineds", () => {
            expect(type_check_v1(undefined, "undefined")).to.be.true;
            expect(type_check_v1(undefined, "number")).to.be.false;
        });

        it("should work for functions", () => {
            expect(type_check_v1(() => {}, "function")).to.be.true;
            expect(type_check_v1(() => {}, "undefined")).to.be.false;
        });
    });

    describe("type check v2", () => {
        it("should work for type checking", () => {
            expect(type_check_v2({ prop1: 1 }, { type: "object" })).to.be.true;
            expect(type_check_v2({ prop1: 1 }, { type: "string" })).to.be.false;
        });

        it("should work for value checking", () => {
            expect(type_check_v2("foo", { type: "string", value: "foo" })).to.be.true;
            expect(type_check_v2("foo", { type: "number", value: "foo" })).to.be.false;
            expect(type_check_v2("foo", { type: "string", value: "bar" })).to.be.false;
        });

        it("should work for enum checking", () => {
            expect(type_check_v2(3, { enum: [ "3", true, 3 ] })).to.be.true;
            expect(type_check_v2(3, { enum: [ "2", true, 2 ] })).to.be.false;
        });
    });
});
