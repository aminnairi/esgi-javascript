"use strict";

import "mocha";

import { expect } from "chai";
import { ucfirst, capitalize, camelCase, snake_case, leet, prop_access, verlan } from "./string";

describe("string.ts", () => {
    describe("uppercase first", () => {
        it("should throw an exception when passing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => ucfirst()).to.throw(Error);
            // @ts-ignore
            expect(() => ucfirst("", "")).to.throw(Error);
        });

        it("should return an empty string when passing something other than a string", () => {
            expect(ucfirst(1)).to.equal("");
        });

        it("should return the uppercased first letter of the word", () => {
            expect(ucfirst("TYPESCRIPT")).to.equal("TYPESCRIPT");
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

        it("should an empty string when passing something other than a string", () => {
            expect(capitalize(1)).to.equal("");
        });

        it("should capitalize the word", () => {
            expect(capitalize("typescript by microsoft")).to.equal("Typescript By Microsoft");
            expect(capitalize("TYPESCRIPT BY MICROSOFT")).to.equal("Typescript By Microsoft");
        });
    });

    describe("camel case", () => {
        it("should throw an error when passing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => camelCase()).to.throw(Error);
            // @ts-ignore
            expect(() => camelCase("", "")).to.throw(Error);
        });

        it("should an empty string when passing something other than a string", () => {
            expect(camelCase(1)).to.equal("");
        });

        it("should return the camel cased word", () => {
            expect(camelCase("typescript by microsoft")).to.equal("TypescriptByMicrosoft");
        });
    });

    describe("snake case", () => {
        it("should return the snake cased word", () => {
            expect(snake_case("typescript or nothing")).to.equal("typescript_or_nothing");
        });

        it("should throw an exception when providing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => snake_case()).to.throw(Error);
            // @ts-ignore
            expect(() => snake_case("", "")).to.throw(Error);
        });

        it("should an empty string when passing something other than a string", () => {
            // @ts-ignore
            expect(snake_case(1)).to.equal("");
        });
    });

    describe("leet", () => {
        it("should throw an error when providing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => leet()).to.throw(Error);
            // @ts-ignore
            expect(() => leet("", "")).to.throw(Error);
        });

        it("should an empty string when providing something other than a string", () => {
            expect(leet(1)).to.equal("");
        });

        it("should return the leet version of a string", () => {
            expect(leet("wikipedia")).to.equal("w1k1p3d14");
        });
    });

    describe("prop access", () => {
        it("should return the property", () => {
            const user = {
                location: {
                    city: {
                        name: "Paris"
                    }
                }
            };

            expect(prop_access(user, "location")).to.deep.equal(user["location"]);
            expect(prop_access(user, "location.city")).to.deep.equal(user["location"]["city"]);
            expect(prop_access(user, "location.city.name")).to.equal("Paris");
        });

        it("should return undefined when accessing an unknown property", () => {
            const user = {
                location: {
                    city: {
                        name: "Paris"
                    }
                }
            };

            expect(prop_access(user, "city")).to.equal(undefined);
            expect(prop_access(user, "city.location.city")).to.be.undefined;
            expect(prop_access(user, "city.location.city.name")).to.be.undefined;
        });

        it("should return the object when passing an empty property or null", () => {
            const user = {
                location: {
                    city: {
                        name: "Paris"
                    }
                }
            };

            expect(prop_access(user, "")).to.deep.equal(user);
            expect(prop_access(user, null)).to.deep.equal(user);
        });
    });

    describe("verlan", () => {
        it("should throw an error when passing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => verlan()).to.throw(Error);
            // @ts-ignore
            expect(() => verlan("", "")).to.throw(Error);
        });

        it("should return an empty string when providing something other than a string", () => {
            // @ts-ignore
            expect(verlan(1)).to.equal("");
        });

        it("should return the reversed words", () => {
            expect(verlan("Hello world")).to.equal("olleH dlrow");
        });
    });
});
