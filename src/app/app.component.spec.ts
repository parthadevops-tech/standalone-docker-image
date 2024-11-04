import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from './httpServ/employee.service';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let employeeService: EmployeeService;
  beforeEach(async () => {
    const employeeServiceMock = {
      userSubject$: new BehaviorSubject<string>(''),
    }
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,AppComponent
      ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService);

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'standaloneComponent15'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('standaloneComponent15');
  });

  it('should set user when initializing', fakeAsync(() => {
    spyOn(sessionStorage, 'getItem').and.returnValue('mockUser');
    component.ngOnInit();
    expect(component.user).toBe('mockUser');
    flush();
  }));

  it('should clear user on logout',fakeAsync(() =>{
    spyOn(employeeService.userSubject$, 'next');
    spyOn(component._router, 'navigate');
    component.logout();

    expect(employeeService.userSubject$.next).toHaveBeenCalledWith(null);
    expect(component._router.navigate).toHaveBeenCalledWith(['login']);
  }));

  it('should clear user on popstate (back button)', fakeAsync(()=>{
    spyOn(employeeService.userSubject$, 'next');

    const mockPopStateEvent = new PopStateEvent('popstate', {});
    window.dispatchEvent(mockPopStateEvent);

    expect(employeeService.userSubject$.next).toHaveBeenCalledWith(null);
  }))
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('standaloneComponent15 app is running!');
  // });
});
