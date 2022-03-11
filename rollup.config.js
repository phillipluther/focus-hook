import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/tactical-focus.js',
      format: 'cjs',
    },
    {
      file: 'dist/tactical-focus.mjs',
      format: 'es',
    },
  ],
  plugins: [terser()],
};
