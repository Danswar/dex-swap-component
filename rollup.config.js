import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.jsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "default",
      },
    ],
    plugins: [
      resolve({
        extensions: ["", ".js", ".jsx"],
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        plugins: ["babel-plugin-styled-components"],
      }),
      commonjs(),
      external(),
      terser(),
    ],
  },
];
