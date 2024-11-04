import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralComponent } from './general.component';
import { DynamicCompComponent } from './Dynamic/dynamic-comp/dynamic-comp.component';
import { EmployeeService } from 'src/app/httpServ/employee.service';
import { SafeResourceUrl, SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { YouTubePlayer } from '@angular/youtube-player';
describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;
  let employeeService: EmployeeService;
  let sanitizer: DomSanitizer;
  let httpClient;
  let httpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
    declarations: [GeneralComponent, DynamicCompComponent, YouTubePlayer],
    imports: [],
    providers: [EmployeeService, DomSanitizer, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService);
    sanitizer = TestBed.inject(DomSanitizer);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component', () => {
    // Your initialization expectations here
  });

  it('should show dynamic component', () => {
    component.showDynamicComponent();
    // Test that the dynamic component is created
    // You may need to use TestBed.createComponent to get the dynamic component and test it
  });

  it('should remove dynamic component', () => {
    component.showDynamicComponent();
    component.removeDynamicComponent();
    // Test that the dynamic component is removed
  });

  it('should set safeValue with sanitized HTML', () => {
    const unsafeHtml = '<h1>Sanitization Success</h1>';
    const safeHtml: SafeHtml = sanitizer.bypassSecurityTrustHtml(unsafeHtml);
    spyOn(employeeService, 'getSafeHtml').and.returnValue(safeHtml);

    component.getXSSValue();

    expect(component.safeValue).toEqual(safeHtml);
  });

  it('should set safeURL with sanitized URL', () => {
    const dangerousUrl = 'javascript:alert("Hi there")';
    const safeUrl: SafeResourceUrl = sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
    //spyOn(employeeService, 'getSafeURL').and.returnValue(safeUrl);

    component.trustedUrl = component.secure.getsafeURL(dangerousUrl);

    expect(component.trustedUrl).toEqual(safeUrl);
  });

  // You can write more test cases as needed
});
