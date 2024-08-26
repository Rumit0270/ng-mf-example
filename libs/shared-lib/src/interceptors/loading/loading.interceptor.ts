import { finalize } from 'rxjs';
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { LoadingService } from '../../services';

export const loadingInterceptor = (): HttpInterceptorFn => (req, next) => {
  const loadingService = inject(LoadingService);

  if (!req.params.get('NO_LOADER')) {
    loadingService.setLoading(true, req.url);
  }

  return next(req).pipe(
    finalize(() => {
      loadingService.setLoading(false, req.url);
    })
  );
};
