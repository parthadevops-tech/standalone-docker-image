import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

fdescribe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        { provide: DomSanitizer, useValue: {
                sanitize: () => 'safeString',
                bypassSecurityTrustHtml: () => 'safeString'
            } },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch employees', () => {
    const dummyEmployees = [
      {
        id: 1,
        firstName: "Henry",
        lastName: "Holmes",
        email: "hholmes0@goodreads.com",
        hoursWorked: 29,
        hourlyWage: 19
      }
    ];
    service.getAllEmpoyees().subscribe(employees => {
      expect(employees).toEqual(dummyEmployees);
    });

    const req = httpMock.expectOne('https://api.angularbootcamp.com/employees');
    expect(req.request.method).toBe('GET');
    req.flush(dummyEmployees);
  });

  it('should update user subject', () => {
    const user = { name: 'admin' };
    service.getUser(user);

    expect(service.userSubject$.getValue()).toEqual(user);
  });

  it('should sanitize HTML', () => {
    const unsafeHtml = '<script>alert("XSS Attack");</script>';
    const sanitizedHtml = service.getSafeHtml(unsafeHtml);
    
    // You can check if the sanitizedHtml is an instance of TrustedHtml
    expect(sanitizedHtml).toBeDefined();
  });

  afterEach(() => {
    httpMock.verify();
  });
})