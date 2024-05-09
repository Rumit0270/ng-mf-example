import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
