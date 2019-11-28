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
    const capitalizedWords: string[] = words.map(word => ucfirst(word));
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

    const words: string[] = input.split(" ");
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

    const words: string[] = input.split(" ");
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
