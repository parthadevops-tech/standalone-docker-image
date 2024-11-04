import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementComponent } from './management.component';

fdescribe('ManagementComponent', () => {
  let component: ManagementComponent;
  let fixture: ComponentFixture<ManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rows and cols arrays', () => {
    expect(component.rows.length).toBe(8);
    expect(component.cols.length).toBe(8);
  });
});
