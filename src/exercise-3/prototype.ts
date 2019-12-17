import { ucfirst } from "../exercise-1/string"

declare global {
    interface String {
        ucfirst(): string;
    }
}

String.prototype.ucfirst = function() {
    return ucfirst(this);
};
