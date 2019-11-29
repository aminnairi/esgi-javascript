"use strict";
function type_check_v1(input, expectedType) {
    if (arguments.length !== 2) {
        throw new Error("Expected exactly two arguments");
    }
    if (typeof expectedType !== "string") {
        throw new TypeError("Expected second argument to be a string");
    }
    const inputType = Object.prototype.toString.call(input).toLowerCase();
    const computedExpectedType = `[object ${expectedType.toLowerCase()}]`;
    return inputType === computedExpectedType;
}
