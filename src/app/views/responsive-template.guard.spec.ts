import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResponsiveTemplateGuard } from './responsive-template.guard';
import { Router } from '@angular/router';

fdescribe('ResponsiveTemplateGuard', () => {
  let guard: ResponsiveTemplateGuard;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ResponsiveTemplateGuard]
    });

    guard = TestBed.inject(ResponsiveTemplateGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow loading if user is "template"', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('template');
    const canLoad = guard.canLoad(null!, []);

    expect(canLoad).toBe(true);
  });

  it('should navigate to login and remove user if user is not "template"', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('general');
    spyOn(sessionStorage, 'removeItem');
    spyOn(router, 'navigate');
    //const routerSpy = spyOn(TestBed.inject(RouterTestingModule), 'navigate');

    const canLoad = guard.canLoad(null!, []);

    expect(canLoad).toBe(false);
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('user');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
