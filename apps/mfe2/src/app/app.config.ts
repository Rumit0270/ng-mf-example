import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import { provideStore } from '@ngrx/store';
import { COUNT_FEATURE_KEY, countReducer } from '@ng-mf-example/data-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore({
      [COUNT_FEATURE_KEY]: countReducer,
    }),
  ],
};
