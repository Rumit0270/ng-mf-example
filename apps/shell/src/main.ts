import { setRemoteDefinitions } from '@nx/angular/mf';
import { environment } from './environments/environment';

const fileSuffix = environment.name ? `.${environment.name}` : '';
const manifestFile = `module-federation.manifest${fileSuffix}.json`;
const manifestFileUrl = environment.baseHref + '/assets' + '/' + manifestFile;

fetch(manifestFileUrl)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
