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
    const words = input.split(/[^a-zA-Z0-9]/);
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
    const words = input.split(/\W/g);
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
function yoda(input) {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }
    if (typeof input !== "string") {
        return "";
    }
    const words = input.split(" ");
    const reversed = words.reverse();
    const reversedInput = reversed.join(" ");
    return reversedInput;
}
function isLowerCase(input) {
    return /[a-z]/.test(input);
}
function isUpperCase(input) {
    return /[A-Z]/.test(input);
}
function vig(input, key) {
    if (arguments.length !== 2) {
        throw new Error("Expected exactly two arguments");
    }
    if (typeof input !== "string") {
        throw new TypeError("First argument expected to be a string");
    }
    if (typeof key !== "string") {
        throw new TypeError("Second argument expected to be a string");
    }
    if (input.length === 0) {
        throw new ReferenceError("First argument must not be empty");
    }
    if (key.length === 0) {
        throw new ReferenceError("Second argument must not be empty");
    }
    const INPUT_LENGTH = input.length;
    const KEY_LENGTH = key.length;
    let result = "";
    for (let index = 0, characterIndex = 0; index < INPUT_LENGTH; index++) {
        if (isUpperCase(input[index])) {
            result += String.fromCharCode((input.charCodeAt(index) - 65 + key.charCodeAt(characterIndex % KEY_LENGTH) - 65) % 26 + 65);
            characterIndex++;
            continue;
        }
        if (isLowerCase(input[index])) {
            result += String.fromCharCode((input.charCodeAt(index) - 97 + key.charCodeAt(characterIndex % KEY_LENGTH) - 97) % 26 + 97);
            characterIndex++;
            continue;
        }
        result += input[index];
    }
    return result;
}
