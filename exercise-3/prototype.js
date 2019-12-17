function ucfirst(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const firstLetter = input.slice(0, 1);
    const firstLetterUppercase = firstLetter.toUpperCase();
    const rest = input.slice(1);
    return firstLetterUppercase + rest;
}

String.prototype.ucfirst = function () {
    return ucfirst(this);
};
