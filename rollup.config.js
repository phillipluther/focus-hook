import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/init-tactical-focus.mjs',
  output: [
    {
      file: 'dist/init-tactical-focus.js',
      format: 'cjs',
    },
    {
      file: 'dist/init-tactical-focus.mjs',
      format: 'es',
    },
    {
      file: 'docs/init-tactical-focus.js',
      format: 'iife',
      name: 'tf',
    },
  ],
  plugins: [terser()],
};
