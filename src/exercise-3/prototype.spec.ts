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
});
