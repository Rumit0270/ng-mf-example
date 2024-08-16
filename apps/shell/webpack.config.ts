import { composePlugins } from '@nx/webpack';
import { withModuleFederation } from '@nx/angular/module-federation';
import * as MergeJsonWebpackPlugin from 'merge-jsons-webpack-plugin';

import config from './module-federation.config';

module.exports = composePlugins(withModuleFederation(config), (config) => {
  config.plugins = [
    new MergeJsonWebpackPlugin({
      output: {
        groupBy: [
          {
            pattern: './libs/shared-lib/src/assets/i18n/en/**/*.json',
            fileName: './assets/i18n/en.json',
          },
          {
            pattern: './libs/shared-lib/src/assets/i18n/fr/**/*.json',
            fileName: './assets/i18n/fr.json',
          },
        ],
      },
    }),
    ...(config.plugins || []),
  ];

  return config;
});
