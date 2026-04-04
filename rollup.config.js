import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const config = [{

    input: "src/index.js",
    output: {
      esModule: true,
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
  },

  {
    input: "actions/check_files/index.js",
    output: {
      esModule: true, 
      file: "actions/check_files/dist/index.js",
      format: "es" ,
      sourcemap: true,
    },
    plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
  }  
]

export default config;

