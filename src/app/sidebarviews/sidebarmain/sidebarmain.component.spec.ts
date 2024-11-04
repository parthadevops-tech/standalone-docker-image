import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmainComponent } from './sidebarmain.component';

describe('SidebarmainComponent', () => {
  let component: SidebarmainComponent;
  let fixture: ComponentFixture<SidebarmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
