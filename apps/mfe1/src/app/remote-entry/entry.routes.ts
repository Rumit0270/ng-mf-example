import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { RemoteEntryComponent } from './entry.component';
import { TranslateLoaderFactory } from '../translation.loader';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'todos',
        component: TodosComponent,
      },
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '' },
    ],
    providers: [
      importProvidersFrom(
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: TranslateLoaderFactory,
            deps: [HttpClient],
          },
          isolate: true,
          defaultLanguage: 'en',
        })
      ),
    ],
  },
];
