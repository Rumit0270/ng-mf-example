import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';

export function TranslateLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const translationFilePath = environment.appURL + '/assets/i18n/';
  return new TranslateHttpLoader(http, translationFilePath);
}
