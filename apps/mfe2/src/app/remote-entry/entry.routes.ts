import { Route } from '@angular/router';
// import { RemoteEntryComponent } from './entry.component';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const remoteRoutes: Route[] = [
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
