import "mocha";
import "./prototype";

import { expect } from "chai";

describe("prototype", function() {
    describe("ucfirst", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.ucfirst).to.not.be.undefined;
        });

        it("should return the uppercase first letter", function() {
            expect("javascript".ucfirst()).to.equal("Javascript");
            expect("JAVASCRIPT".ucfirst()).to.equal("JAVASCRIPT");
            expect("JavaScript".ucfirst()).to.equal("JavaScript");
            expect("javaScript".ucfirst()).to.equal("JavaScript");
        });
    });

    describe("capitalize", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.capitalize).to.not.be.undefined;
        });

        it("should return the uppercase words", function() {
            expect("bonjour le monde".capitalize()).to.equal("Bonjour Le Monde");
            expect("BONJOUR LE MONDE".capitalize()).to.equal("Bonjour Le Monde");
            expect("Bonjour Le Monde".capitalize()).to.equal("Bonjour Le Monde");
            expect("bonjour_le_monde".capitalize()).to.equal("Bonjour_le_monde");
        });
    });

    describe("camelCase", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.camelCase).to.not.be.undefined;
        });

        it("should return the camel cased words", function() {
            expect("bonjour le monde".camelCase()).to.equal("BonjourLeMonde");
            expect("BONJOUR LE MONDE".camelCase()).to.equal("BonjourLeMonde");
            expect("Bonjour Le Monde".camelCase()).to.equal("BonjourLeMonde");
            expect("bonjour_le_monde".camelCase()).to.equal("BonjourLeMonde");
        });
    });

    describe("snake_case", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.snake_case).to.not.be.undefined;
        });

        it("should return the snake cased words", function() {
            expect("bonjour le monde".snake_case()).to.equal("bonjour_le_monde");
            expect("BONJOUR LE MONDE".snake_case()).to.equal("bonjour_le_monde");
            expect("Bonjour Le Monde".snake_case()).to.equal("bonjour_le_monde");
            expect("bonjour_le_monde".snake_case()).to.equal("bonjour_le_monde");
        });
    });

    describe("leet", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.leet).to.not.be.undefined;
        });

        it("should return the leet word", function() {
            expect("bonjour".leet()).to.equal("b0nj0(_)r");
            expect("monde".leet()).to.equal("m0nd3");
            expect("bonjour le monde".leet()).to.equal("b0nj0(_)r l3 m0nd3");
            expect("BONJOUR LE MONDE".leet()).to.equal("B0NJ0(_)R L3 M0ND3");
        });
    });

    describe("verlan", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.verlan).to.not.be.undefined;
        });

        it("should return the verlan word", function() {
            expect("bonjour".verlan()).to.equal("ruojnob");
            expect("monde".verlan()).to.equal("ednom");
            expect("bonjour le monde".verlan()).to.equal("ruojnob el ednom");
            expect("BONJOUR LE MONDE".verlan()).to.equal("RUOJNOB EL EDNOM");
        });
    });

    describe("yoda", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.yoda).to.not.be.undefined;
        });

        it("should return the yoda word", function() {
            expect("bonjour".yoda()).to.equal("bonjour");
            expect("bonjour le monde".yoda()).to.equal("monde le bonjour");
            expect("BONJOUR LE MONDE".yoda()).to.equal("MONDE LE BONJOUR");
        });
    });

    describe("vig", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.vig).to.not.be.undefined;
        });

        it("should return the vig word", function() {
            expect("wikipedia".vig("crypto")).to.equal("yzixisfzy");
        });
    });

    describe("prop_access", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.prop_access).to.not.be.undefined;
        });

        it("should return the prop_access word", function() {
            expect({languages: { web: [ "php", "javascript" ]}}.prop_access("languages.web")).to.deep.equal(["php", "javascript"]);
        });
    });
});
