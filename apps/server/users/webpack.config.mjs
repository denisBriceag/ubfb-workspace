import { join } from 'node:path';

import { NxAppWebpackPlugin } from '@nx/webpack/app-plugin';

export default {
  output: {
    path: join(import.meta.dirname, '../../../dist/apps/server/users'),
    clean: true,
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: [
        './src/assets',
        {
          input: '../../../libs/contracts/src/proto',
          glob: '*.proto',
          output: 'proto',
        },
      ],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: true,
    }),
  ],
};
