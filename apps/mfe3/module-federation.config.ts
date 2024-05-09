import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe3',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
