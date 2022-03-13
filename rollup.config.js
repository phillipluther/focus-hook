import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/init-tactical-focus.js',
      format: 'cjs',
    },
    {
      file: 'dist/init-tactical-focus.mjs',
      format: 'es',
    },
  ],
  plugins: [terser()],
};
