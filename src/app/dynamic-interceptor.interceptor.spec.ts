import { TestBed } from '@angular/core/testing';

import { DynamicInterceptorInterceptor } from './dynamic-interceptor.interceptor';

describe('DynamicInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DynamicInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DynamicInterceptorInterceptor = TestBed.inject(DynamicInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
