import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTmpltComponent } from './responsive-tmplt.component';

describe('ResponsiveTmpltComponent', () => {
  let component: ResponsiveTmpltComponent;
  let fixture: ComponentFixture<ResponsiveTmpltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveTmpltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveTmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
