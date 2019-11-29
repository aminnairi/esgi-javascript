"use strict";

export function type_check_v1(input: unknown, expectedType: string) {
    const inputType: string = Object.prototype.toString.call(input).toLowerCase();
    const computedExpectedType: string = `[object ${expectedType.toLowerCase()}]`;

    return inputType === computedExpectedType;
}

