"use strict";
function ucfirst(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }
    const firstLetter = input.slice(0, 1);
    const firstLetterUppercase = firstLetter.toUpperCase();
    const rest = input.slice(1);
    return firstLetterUppercase + rest;
}
function capitalize(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }
    const words = input.split(" ");
    const capitalizedWords = words.map(word => ucfirst(word));
    const capitalizedWord = capitalizedWords.join(" ");
    return capitalizedWord;
}
function camelCase(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }
    const words = input.split(" ");
    const capitalizedWords = words.map(word => ucfirst(word.toLowerCase()));
    const camelCasedWord = capitalizedWords.join("");
    return camelCasedWord;
}
function snakeCase(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }
    const words = input.split(" ");
    const lowercasedWords = words.map(word => word.toLowerCase());
    const snakeCasedWord = lowercasedWords.join("_");
    return snakeCasedWord;
}
