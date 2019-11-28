"use strict";

export function ucfirst(input: unknown): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const firstLetter: string = input.slice(0, 1);
    const firstLetterUppercase: string = firstLetter.toUpperCase();
    const rest: string = input.slice(1);

    return firstLetterUppercase + rest;
}

export function capitalize(input: unknown): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const words: string[] = input.split(" ");
    const capitalizedWords: string[] = words.map(word => ucfirst(word.toLowerCase()));
    const capitalizedWord: string = capitalizedWords.join(" ");

    return capitalizedWord;
}

export function camelCase(input: unknown): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const words: string[] = input.split(/[^a-zA-Z0-9]/);
    const capitalizedWords: string[] = words.map(word => ucfirst(word.toLowerCase()))
    const camelCasedWord: string = capitalizedWords.join("");

    return camelCasedWord;
}

export function snake_case(input: unknown): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const words: string[] = input.split(/\W/g);
    const lowercasedWords: string[] = words.map(word => word.toLowerCase());
    const snakeCasedWord: string = lowercasedWords.join("_");

    return snakeCasedWord;
}

export function leet(input: unknown): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const crypted: {[key: string]: string} = {
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

    const characters: string[] = [...input];
    const encrypt = (character: string): string => character in crypted ? crypted[character] : character;
    const encryptedCharacters: string[] = characters.map(encrypt);
    const encryptedString: string = encryptedCharacters.join("");

    return encryptedString;
}

interface PropAccessInput {
    [key: string]: PropAccessInput | unknown
};

export function prop_access(input: PropAccessInput, properties: string | null, tested: string[] = []): unknown {
    if (properties === null || properties.length === 0) {
        return input;
    }

    const [first, ...rest]: string[] = properties.split(".");

    tested.push(first)

    if (!(first in input)) {
        const stringified: string = tested.join(".");

        return console.log(`${stringified} not exist`);
    }

    return prop_access(input[first] as PropAccessInput, rest.join("."), tested);
}

export function verlan(input: string): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const words: string[] = input.split(" ");
    const reversed: string[] = words.map(word => [...word].reverse().join(""));
    const newInput: string = reversed.join(" ");

    return newInput;
}

export function yoda(input: string): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        return "";
    }

    const words: string[] = input.split(" ");
    const reversed: string[] = words.reverse();
    const reversedInput: string = reversed.join(" ");

    return reversedInput;
}


function isLowerCase(input: string): boolean {
    return /[a-z]/.test(input);
}

function isUpperCase(input: string): boolean {
    return /[A-Z]/.test(input);
}

export function vig(input: string, key: string): string {
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

    const INPUT_LENGTH: number = input.length;
    const KEY_LENGTH: number = key.length;
    let result: string = "";

    for (let index: number = 0, characterIndex: number = 0; index < INPUT_LENGTH; index++) {
        if (isUpperCase(input[index])) {
            result += String.fromCharCode((input.charCodeAt(index) - 65 + key.charCodeAt(characterIndex % KEY_LENGTH) - 65) % 26 + 65)
            characterIndex++;
            continue;
        }

        if (isLowerCase(input[index])) {
            result += String.fromCharCode((input.charCodeAt(index) - 97 + key.charCodeAt(characterIndex % KEY_LENGTH) - 97) % 26 + 97)
            characterIndex++;
            continue;
        }

        result += input[index];
    }

    return result;
}
