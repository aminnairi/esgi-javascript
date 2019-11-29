"use strict";

export function type_check_v1(input: unknown, expectedType: string) {
    if (arguments.length !== 2) {
        throw new Error("Expected exactly two arguments");
    }

    if (typeof expectedType !== "string") {
        throw new TypeError("Expected second argument to be a string");
    }

    const inputType: string = Object.prototype.toString.call(input).toLowerCase();
    const computedExpectedType: string = `[object ${expectedType.toLowerCase()}]`;

    return inputType === computedExpectedType;
}

