import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Route[] = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe3',
    children: [
      {
        path: '**',
        component: UsersComponent,
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];
