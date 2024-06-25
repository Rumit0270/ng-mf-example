import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { RemoteEntryComponent } from './entry.component';
import { DetailsComponent } from './details/details.component';
import { createTranslationLoader } from '../translation.loader';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
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
