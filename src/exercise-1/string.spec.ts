"use strict";

import "mocha";

import { expect } from "chai";
import { ucfirst, capitalize, camelCase, snake_case, leet, prop_access, verlan, yoda, vig } from "./string";

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
            expect(camelCase("typeScript by_microsoft")).to.equal("TypescriptByMicrosoft");
        });
    });

    describe("snake case", () => {
        it("should return the snake cased word", () => {
            expect(snake_case("typescript or nothing")).to.equal("typescript_or_nothing");
            expect(snake_case("typescript or_nothing")).to.equal("typescript_or_nothing");
            expect(snake_case("typeScript Or_nothing")).to.equal("typescript_or_nothing");
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

    describe("yoda", () => {
        it("should throw an error when passing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => yoda()).to.throw(Error);
            // @ts-ignore
            expect(() => yoda("", "")).to.throw(Error);
        });

        it("should return an empty string when providing something other than a string", () => {
            // @ts-ignore
            expect(yoda(1)).to.equal("");
        });

        it("should return the reversed words", () => {
            expect(yoda("Hello world")).to.equal("world Hello");
        });
    });

    describe("vig", () => {
        it("should throw an error when passing an incorrect amount of arguments", () => {
            // @ts-ignore
            expect(() => vig()).to.throw(Error);
            // @ts-ignore
            expect(() => vig("vig")).to.throw(Error);
            // @ts-ignore
            expect(() => vig("vig", "vig", "vig")).to.throw(Error);
        });

        it("should throw an error when providing something other than a string", () => {
            // @ts-ignore
            expect(() => vig(1, "vig")).to.throw(TypeError);
            // @ts-ignore
            expect(() => vig("vig", 1)).to.throw(TypeError);
        });

        it("should throw an error when providing empty strings", () => {
            expect(() => vig("", "vig")).to.throw(ReferenceError);
            expect(() => vig("vig", "")).to.throw(ReferenceError);
            expect(() => vig("", "")).to.throw(ReferenceError);
        });

        it("should return the encrypted string", () => {
            expect(vig("wikipedia", "crypto")).to.equal("yzixisfzy");
            expect(vig("j'adore ecouter la radio toute la journee", "musique")).to.equal("v'uvwhy ioimbul pm lslyi xaolm bu naojvuy");
            expect(vig("J'ADORE ECOUTER LA RADIO TOUTE LA JOURNEE", "MUSIQUE")).to.equal("V'UVWHY IOIMBUL PM LSLYI XAOLM BU NAOJVUY");
        });
    });
});
