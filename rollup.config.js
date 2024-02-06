import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/init-tactical-focus.ts',
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
  plugins: [typescript(), terser()],
};
