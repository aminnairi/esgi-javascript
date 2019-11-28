"use strict";
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
function capitalize(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const words = input.split(" ");
    const capitalizedWords = words.map(word => ucfirst(word.toLowerCase()));
    const capitalizedWord = capitalizedWords.join(" ");
    return capitalizedWord;
}
function camelCase(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const words = input.split(" ");
    const capitalizedWords = words.map(word => ucfirst(word.toLowerCase()));
    const camelCasedWord = capitalizedWords.join("");
    return camelCasedWord;
}
function snake_case(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const words = input.split(" ");
    const lowercasedWords = words.map(word => word.toLowerCase());
    const snakeCasedWord = lowercasedWords.join("_");
    return snakeCasedWord;
}
function leet(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const crypted = {
        "a": "4",
        "A": "4",
        "e": "3",
        "E": "3",
        "i": "1",
        "I": "1",
        "o": "0",
        "O": "0",
        "u": "(_)",
        "U": "(_)",
        "y": "7",
        "Y": "7"
    };
    const characters = [...input];
    const encrypt = (character) => character in crypted ? crypted[character] : character;
    const encryptedCharacters = characters.map(encrypt);
    const encryptedString = encryptedCharacters.join("");
    return encryptedString;
}
;
function prop_access(input, properties, tested = []) {
    if (properties === null || properties.length === 0) {
        return input;
    }
    const [first, ...rest] = properties.split(".");
    tested.push(first);
    if (!(first in input)) {
        const stringified = tested.join(".");
        return console.log(`${stringified} not exist`);
    }
    return prop_access(input[first], rest.join("."), tested);
}
function verlan(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const words = input.split(" ");
    const reversed = words.map(word => [...word].reverse().join(""));
    const newInput = reversed.join(" ");
    return newInput;
}
