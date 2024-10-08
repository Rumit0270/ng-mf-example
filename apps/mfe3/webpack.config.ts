import * as dotenv from 'dotenv';
import * as webpack from 'webpack';
import { withReact } from '@nx/react';
import { composePlugins, withNx } from '@nx/webpack';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

dotenv.config();

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config, { options, context }) => {
    // `config` is the Webpack configuration object
    // `options` is the options passed to the `@nx/webpack:webpack` executor
    // `context` is the context passed to the `@nx/webpack:webpack` executor
    // customize configuration here

    config.plugins = [
      new webpack.EnvironmentPlugin(['BASE_PREFIX']),
      ...(config.plugins || []),
    ];

    return config;
  }
);
