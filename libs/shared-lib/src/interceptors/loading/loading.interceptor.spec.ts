import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { loadingInterceptor } from './loading.interceptor';

describe('loadingInterceptor', () => {
  const interceptor: HttpInterceptorFn = loadingInterceptor();

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
