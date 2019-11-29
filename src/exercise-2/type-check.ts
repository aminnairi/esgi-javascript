"use strict";

interface TypeCheckV2Options {
    type?: string;
    value?: unknown;
    enum?: unknown[];
};

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

export function type_check_v2(input: unknown, options: TypeCheckV2Options) {
    if (options.hasOwnProperty("type") && !type_check_v1(input, (options.type as string))) {
        return false;
    }

    if (options.hasOwnProperty("value")) {
        if (type_check_v1(input, "object")) {
            if (type_check_v1(options.value, "object") && JSON.stringify(options.value) !== JSON.stringify(input)) {
                return false;
            }
        } else {
            if (input !== options.value) {
                return false;
            }
        }
    }

    if (options.hasOwnProperty("enum") && !(options.enum as unknown[]).includes(input)) {
        return false;
    }

    return true;
}
