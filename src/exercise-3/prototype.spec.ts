import "mocha";
import "./prototype";

import { expect } from "chai";

describe("prototype", function() {
    describe("ucfirst", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.ucfirst).to.not.be.null;
        });

        it("should return the uppercase first letter", function() {
            expect("javascript".ucfirst()).to.equal("Javascript");
            expect("JAVASCRIPT".ucfirst()).to.equal("JAVASCRIPT");
            expect("JavaScript".ucfirst()).to.equal("JavaScript");
            expect("javaScript".ucfirst()).to.equal("JavaScript");
        });
    });
});
