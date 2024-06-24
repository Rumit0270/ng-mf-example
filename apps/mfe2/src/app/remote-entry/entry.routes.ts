import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { RootComponent } from './root.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { createTranslationLoader } from '../translation.loader';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
      { path: '**', redirectTo: '' },
    ],
    providers: [
      importProvidersFrom(
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslationLoader,
            deps: [HttpClient],
          },
          isolate: true,
          defaultLanguage: 'en',
        })
      ),
    ],
  },
];
