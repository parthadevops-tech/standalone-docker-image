import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ManagementguardGuard } from './managementguard.guard';

fdescribe('ManagementguardGuard', () => {
  let guard: ManagementguardGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManagementguardGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation if user is "manager"', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('manager');
    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
    expect(canActivate).toBe(true);
  });

  it('should navigate to login and remove user if user is not "manager"', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('general');
    spyOn(sessionStorage, 'removeItem');
    spyOn(router, 'navigate');

    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(canActivate).toBe(false);
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('user');
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});