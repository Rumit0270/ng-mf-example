import { Route } from '@angular/router';
// import { RemoteEntryComponent } from './entry.component';

import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

export const remoteRoutes: Route[] = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  { path: '', component: HomeComponent },
];
