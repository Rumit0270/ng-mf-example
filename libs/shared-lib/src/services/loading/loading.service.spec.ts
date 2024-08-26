import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;
  const testUrl = 'http://example.xyz';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set loadingMap with URL as true and loadingSub$ should emit true', () => {
    let loadingValue = false;
    service.loading$.subscribe((res) => {
      loadingValue = res;
    });

    service.setLoading(true, testUrl);

    expect(service.loadingMap.get(testUrl)).toBe(true);
    expect(loadingValue).toBe(true);
  });

  it('should delete url from loadingMap and loadingSub$ should emit false if loadingMap is empty', () => {
    let loadingValue = true;
    service.loadingMap.set(testUrl, true);
    service.loading$.subscribe((res) => {
      loadingValue = res;
    });

    service.setLoading(false, testUrl);

    expect(service.loadingMap.get(testUrl)).toBeUndefined();
    expect(loadingValue).toBe(false);
  });

  it('should delete url from loadingMap and loadingSub$ should not emit value if loadingMap has some active url keys', () => {
    let loadingValue: boolean | undefined = undefined;

    service.loadingMap.set(testUrl, true);
    service.loadingMap.set('http://test.xyz', true);
    service.loading$.subscribe((res) => {
      loadingValue = res;
    });

    service.setLoading(false, testUrl);

    expect(service.loadingMap.get(testUrl)).toBeUndefined();
    expect(loadingValue).toBe(false);
  });

  describe('updateLoading', () => {
    it('should emit new value for loadingSub$', () => {
      let loadingValue = false;

      service.loading$.subscribe((value) => {
        loadingValue = value;
      });
      service.updateLoading(true);

      expect(loadingValue).toBe(true);
    });
  });
});
