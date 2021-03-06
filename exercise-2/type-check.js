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
function type_check_v2(input, options) {
    if (options.hasOwnProperty("type") && !type_check_v1(input, options.type)) {
        return false;
    }
    if (options.hasOwnProperty("value")) {
        if (type_check_v1(input, "object")) {
            if (type_check_v1(options.value, "object") && JSON.stringify(options.value) !== JSON.stringify(input)) {
                return false;
            }
        }
        else {
            if (input !== options.value) {
                return false;
            }
        }
    }
    if (options.hasOwnProperty("enum") && !options.enum.includes(input)) {
        return false;
    }
    return true;
}

