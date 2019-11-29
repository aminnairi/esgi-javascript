"use strict";
function type_check_v1(input, expectedType) {
    const inputType = Object.prototype.toString.call(input).toLowerCase();
    const computedExpectedType = `[object ${expectedType.toLowerCase()}]`;
    return inputType === computedExpectedType;
}
