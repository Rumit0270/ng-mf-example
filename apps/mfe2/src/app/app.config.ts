import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { loadingInterceptor } from '@ng-mf-example/shared-lib';
import { COUNT_FEATURE_KEY, countReducer } from '@ng-mf-example/data-store';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([loadingInterceptor()])),
    provideStore({
      [COUNT_FEATURE_KEY]: countReducer,
    }),
    importProvidersFrom(TranslateModule.forRoot()),
  ],
};
