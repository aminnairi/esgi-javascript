import { ucfirst, capitalize, camelCase, snake_case, leet } from "../exercise-1/string"

declare global {
    interface String {
        ucfirst(): string;
        capitalize(): string;
        camelCase(): string;
        snake_case(): string;
        leet(): string;
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

String.prototype.snake_case = function() {
    return snake_case(this);
};

String.prototype.leet = function() {
    return leet(this);
};
