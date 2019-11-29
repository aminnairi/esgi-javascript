"use strict";

import "mocha";

import { expect } from "chai";
import { type_check_v1 } from "./type-check";

describe("type check", () => {
    describe("type check v1", () => {
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
});
