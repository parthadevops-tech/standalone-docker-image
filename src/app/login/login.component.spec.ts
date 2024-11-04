import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { EmployeeService } from '../httpServ/employee.service';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let employeeService;
  beforeEach(async () => {
    const employeeServiceMock = {
      userSubject$: new BehaviorSubject<string>(''),
    }
    await TestBed.configureTestingModule({
      imports: [ LoginComponent,RouterTestingModule, FormsModule ],
      //declarations: [ LoginComponent ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = TestBed.inject(EmployeeService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear session storage on initialization', () => {
    spyOn(sessionStorage, 'clear');
    component.ngOnInit();
    expect(sessionStorage.clear).toHaveBeenCalled();
  });

  it('should have been called handleLoginClick function', fakeAsync(() =>{
    spyOn(component, 'handleLoginClick');
    const debug=fixture.debugElement.query(By.css('.btn-primary'));
    debug.triggerEventHandler('click', null);
    tick();
    //fixture.detectChanges();
    expect(component.handleLoginClick).toHaveBeenCalled();
    flush();
  }));

  it('should call authenticateUser when username and password are provided', fakeAsync(() => {
    spyOn(component,'authenticateUser');
    component.username = "admin";
    component.password = "admin";
    component.handleLoginClick();
    expect(component.authenticateUser).toHaveBeenCalledWith('admin');
  }));

  it('should show alert when username or password is missing', fakeAsync(() => {
    spyOn(window, 'alert');
    component.handleLoginClick();
    expect(window.alert).toHaveBeenCalledWith('enter username and password');
  }));

  it('should navigate to admin page for "admin" user', () => {
    spyOn(component.router, 'navigate');
    component.authenticateUser('admin');
    expect(sessionStorage.getItem('user')).toBe('admin');
    expect(component.router.navigate).toHaveBeenCalledWith(['/admin']);
  });

  it('should navigate to manager page for "manager" user', () => {
    spyOn(component.router, 'navigate');
    component.authenticateUser('manager');
    expect(sessionStorage.getItem('user')).toBe('manager');
    expect(component.router.navigate).toHaveBeenCalledWith(['/manage']);
  });

  it('should navigate to general page for "general" user', () => {
    spyOn(component.router, 'navigate');
    component.authenticateUser('general');
    expect(sessionStorage.getItem('user')).toBe('general');
    expect(component.router.navigate).toHaveBeenCalledWith(['/general']);
  });

  it('should navigate to template page for "template" user', () => {
    spyOn(component.router, 'navigate');
    component.authenticateUser('template');
    expect(sessionStorage.getItem('user')).toBe('template');
    expect(component.router.navigate).toHaveBeenCalledWith(['/template']);
  });
});
