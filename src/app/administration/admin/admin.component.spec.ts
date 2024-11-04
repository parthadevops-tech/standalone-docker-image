import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { EmployeeService } from 'src/app/httpServ/employee.service';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

fdescribe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let employeeService: EmployeeService;
  let httpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AdminComponent],
    providers: [EmployeeService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEmployeeList on initialization', () => {
    spyOn(component, 'getEmployeeList');
    component.ngOnInit();
    expect(component.getEmployeeList).toHaveBeenCalled();
  });

  it('should populate employeeList with data from service', () => {
    const dummyEmployees = [
      {
        id: 1,
        firstName: 'Henry',
        lastName: 'Holmes',
        email: 'hholmes0@goodreads.com',
        hoursWorked: 29,
        hourlyWage: 19,
      },
    ];
    spyOn(employeeService, 'getAllEmpoyees').and.callFake(() => {
      return of(dummyEmployees);
    });
    component.getEmployeeList();

    expect(component.employeeList$).toEqual(employeeService.getAllEmpoyees());
  });
});
