import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { COUNT_FEATURE_KEY, countReducer } from '@ng-mf-example/data-store';
import { TranslateModule } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore({
      [COUNT_FEATURE_KEY]: countReducer,
    }),
    importProvidersFrom(TranslateModule.forRoot()),
  ],
};
