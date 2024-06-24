import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { createTranslationLoader } from '../translation.loader';

import { RootComponent } from './root.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RootComponent,
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
