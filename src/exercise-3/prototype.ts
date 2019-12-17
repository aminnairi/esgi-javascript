import { ucfirst, capitalize } from "../exercise-1/string"

declare global {
    interface String {
        ucfirst(): string;
        capitalize(): string;
    }
}

String.prototype.ucfirst = function() {
    return ucfirst(this);
};

String.prototype.capitalize = function() {
    return capitalize(this);
};
