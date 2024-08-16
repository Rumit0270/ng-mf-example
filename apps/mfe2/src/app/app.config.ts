import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { appRoutes } from './app.routes';
import { COUNT_FEATURE_KEY, countReducer } from '@ng-mf-example/data-store';
import { TranslateLoaderFactory } from './translation.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore({
      [COUNT_FEATURE_KEY]: countReducer,
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
