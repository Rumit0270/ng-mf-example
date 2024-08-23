import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { COUNT_FEATURE_KEY, countReducer } from '@ng-mf-example/data-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
