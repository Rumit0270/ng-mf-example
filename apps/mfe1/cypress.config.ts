import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      webServerCommands: {
        default: 'nx run mfe1:serve',
        production: 'nx run mfe1:serve:production',
      },
      ciWebServerCommand: 'nx run mfe1:serve-static',
    }),
  },
});
