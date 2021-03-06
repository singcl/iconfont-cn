import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
// import jsx from "acorn-jsx";

export default [
  // browser-friendly UMD build
  {
    input: "src/main.js",
    output: {
      name: "AliIconVue",
      file: pkg.browser,
      format: "umd", // iife
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        babelHelpers: "bundled",
        exclude: ["node_modules/**"],
      }),
      terser(),
    ],
    // acornInjectPlugins: [jsx()]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/main.js",
    external: ["lodash.isplainobject", "classnames"],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        babelHelpers: "bundled",
        exclude: ["node_modules/**"],
      }),
      terser(),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
