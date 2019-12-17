import "mocha";
import "./prototype";

import { expect } from "chai";

describe("prototype", function() {
    describe("ucfirst", function() {
        it("should be defined in the String.prototype", function() {
            expect(String.prototype.ucfirst).to.not.be.null;
        });
    });
});
