import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe1',
  exposes: {
    './Routes': 'apps/mfe1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
