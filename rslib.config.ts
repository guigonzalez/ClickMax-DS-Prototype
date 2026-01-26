import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
      dts: {
        bundle: false,
        distPath: './dist/types',
      },
    },
    {
      format: 'cjs',
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
  ],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    target: 'web',
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
  plugins: [pluginReact()],
});
