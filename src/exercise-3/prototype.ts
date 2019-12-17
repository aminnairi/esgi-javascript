import { ucfirst, capitalize, camelCase } from "../exercise-1/string"

declare global {
    interface String {
        ucfirst(): string;
        capitalize(): string;
        camelCase(): string;
    }
}

String.prototype.ucfirst = function() {
    return ucfirst(this);
};

String.prototype.capitalize = function() {
    return capitalize(this);
};

String.prototype.camelCase = function() {
    return camelCase(this);
};
