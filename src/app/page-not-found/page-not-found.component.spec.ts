import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from '../httpServ/employee.service';

fdescribe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let employeeService: EmployeeService;
  beforeEach(async () => {
    const employeeServiceMock = {
      userSubject$: new BehaviorSubject<string>(''),
    }
    await TestBed.configureTestingModule({
      imports: [ PageNotFoundComponent ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceMock },
      ]
    })
    .compileComponents();
    employeeService = TestBed.inject(EmployeeService);
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  gotoHome function',fakeAsync(() =>{
    spyOn(employeeService.userSubject$, 'next');
    spyOn(component.r, 'navigate');
    component.gotoHome();

    expect(employeeService.userSubject$.next).toHaveBeenCalledWith(null);
    expect(component.r.navigate).toHaveBeenCalledWith(['/login']);
  }));
});
