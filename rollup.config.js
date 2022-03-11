import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/focus-hook.js',
      format: 'cjs',
    },
    {
      file: 'dist/focus-hook.module.js',
      format: 'es',
    },
  ],
  plugins: [terser()],
};
