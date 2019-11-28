"use strict";

export function ucfirst(input: string): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }

    const firstLetter: string = input.slice(0, 1);
    const firstLetterUppercase: string = firstLetter.toUpperCase();
    const rest: string = input.slice(1);

    return firstLetterUppercase + rest;
}

export function capitalize(input: string): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }

    const words: string[] = input.split(" ");
    const capitalizedWords: string[] = words.map(word => ucfirst(word));
    const capitalizedWord: string = capitalizedWords.join(" ");

    return capitalizedWord;
}

export function camelCase(input: string): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }

    const words: string[] = input.split(" ");
    const capitalizedWords: string[] = words.map(word => ucfirst(word.toLowerCase()))
    const camelCasedWord: string = capitalizedWords.join("");

    return camelCasedWord;
}

export function snakeCase(input: string): string {
    if (arguments.length !== 1) {
        throw new Error("Expected only one argument");
    }

    if (typeof input !== "string") {
        throw new TypeError("Expected first argument to be a string");
    }

    const words: string[] = input.split(" ");
    const lowercasedWords: string[] = words.map(word => word.toLowerCase());
    const snakeCasedWord: string = lowercasedWords.join("_");

    return snakeCasedWord;
}
