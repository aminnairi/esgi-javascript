import remove from "rollup-plugin-delete";
import { resolve } from "path";
import typescript from "rollup-plugin-typescript3";

const bundle = path => ({
    input: resolve(__dirname, "src", path),
    output: {
        file: resolve(__dirname, path.replace("ts", "js")),
        format: "esm"
    },
    plugins: [ typescript(),
        remove({ targets: resolve(__dirname, path.replace("ts", "js")),
            verbose: true }) ]
});

export default [ bundle("exercise-1/string.ts"),
    bundle("exercise-2/type-check.ts"),
    bundle("exercise-3/prototype.ts") ];
