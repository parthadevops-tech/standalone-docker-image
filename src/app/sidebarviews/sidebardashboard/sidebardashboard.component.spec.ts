import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardashboardComponent } from './sidebardashboard.component';

describe('SidebardashboardComponent', () => {
  let component: SidebardashboardComponent;
  let fixture: ComponentFixture<SidebardashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebardashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
