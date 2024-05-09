import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe2',
  exposes: {
    './Routes': 'apps/mfe2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
