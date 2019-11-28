"use strict";

import "mocha";

import { expect } from "chai";
import { ucfirst, capitalize, camelCase, snakeCase } from "./string";

describe("exercice 1", () => {
    describe("string.ts", () => {
        describe("uppercase first", () => {
            it("should throw an exception when passing an incorrect amount of arguments", () => {
                // @ts-ignore
                expect(() => ucfirst()).to.throw(Error);
                // @ts-ignore
                expect(() => ucfirst("", "")).to.throw(Error);
            });

            it("should throw an error when passing something other than a string", () => {
                // @ts-ignore
                expect(() => ucfirst(1)).to.throw(TypeError);
            });

            it("should return the uppercased first letter of the word", () => {
                expect(ucfirst("typescript")).to.equal("Typescript");
            });
        });

        describe("capitalize", () => {
            it("should throw an error when passing an incorrect amount of arguments", () => {
                // @ts-ignore
                expect(() => capitalize()).to.throw(Error);
                // @ts-ignore
                expect(() => capitalize("", "")).to.throw(Error);
            });

            it("should throw an error when passing something other than a string", () => {
                // @ts-ignore
                expect(() => capitalize(1)).to.throw(TypeError);
            });

            it("should capitalize the word", () => {
                expect(capitalize("typescript by microsoft")).to.equal("Typescript By Microsoft");
            });
        });

        describe("camel case", () => {
            it("should throw an error when passing an incorrect amount of arguments", () => {
                // @ts-ignore
                expect(() => camelCase()).to.throw(Error);
                // @ts-ignore
                expect(() => camelCase("", "")).to.throw(Error);
            });

            it("should throw an error when passing something other than a string", () => {
                // @ts-ignore
                expect(() => camelCase(1)).to.throw(TypeError);
            });

            it("should return the camel cased word", () => {
                expect(camelCase("typescript by microsoft")).to.equal("TypescriptByMicrosoft");
            });
        });

        describe("snake case", () => {
            it("should return the snake cased word", () => {
                expect(snakeCase("typescript or nothing")).to.equal("typescript_or_nothing");
            });

            it("should throw an exception when providing an incorrect amount of arguments", () => {
                // @ts-ignore
                expect(() => snakeCase()).to.throw(Error);
                // @ts-ignore
                expect(() => snakeCase("", "")).to.throw(Error);
            });

            it("should throw an exception when passing something other than a string", () => {
                // @ts-ignore
                expect(() => snakeCase(1)).to.throw(TypeError);
            });
        });
    });
});
