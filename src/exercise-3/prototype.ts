import {
    ucfirst,
    capitalize,
    camelCase,
    snake_case,
    leet,
    verlan,
    yoda,
    vig,
    prop_access,
    PropAccessInput
} from "../exercise-1/string"

declare global {
    interface String {
        ucfirst(): string;
        capitalize(): string;
        camelCase(): string;
        snake_case(): string;
        leet(): string;
        verlan(): string;
        yoda(): string;
        vig(key: string): string;
    }

    interface Object {
        prop_access(properties: string | null): unknown;
    }
}

String.prototype.ucfirst = function(): string {
    return ucfirst(this);
};

String.prototype.capitalize = function(): string {
    return capitalize(this);
};

String.prototype.camelCase = function(): string {
    return camelCase(this);
};

String.prototype.snake_case = function(): string {
    return snake_case(this);
};

String.prototype.leet = function(): string {
    return leet(this);
};

String.prototype.verlan = function(): string {
    return verlan(this as string);
};

String.prototype.yoda = function(): string {
    return yoda(this as string);
};

String.prototype.vig = function(key: string): string {
    return vig(this, key);
};

Object.prototype.prop_access = function(properties: string | null) {
    return prop_access(this as PropAccessInput, properties); 
};
