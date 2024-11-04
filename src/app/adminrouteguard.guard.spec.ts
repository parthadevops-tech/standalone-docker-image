import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { adminRouteGuard } from './adminrouteguard.guard';

describe('AdminRouteGuard', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[adminRouteGuard]
    });
    router = TestBed.inject(Router);
  });

  it('should allow navigation if user is "admin"', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('admin');
    const canActivate = adminRouteGuard();
    expect(canActivate).toBe(true);
  });

  it('should navigate to login if user is not "admin"', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('general');
    spyOn(router, 'navigate');

    const canActivate = adminRouteGuard();

    expect(canActivate).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});