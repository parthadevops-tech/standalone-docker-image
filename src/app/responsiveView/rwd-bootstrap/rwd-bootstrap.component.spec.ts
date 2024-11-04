import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdBootstrapComponent } from './rwd-bootstrap.component';

describe('RwdBootstrapComponent', () => {
  let component: RwdBootstrapComponent;
  let fixture: ComponentFixture<RwdBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwdBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwdBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
