import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRideCardComponent } from './dashboard-ride-card.component';

describe('DashboardRideCardComponent', () => {
  let component: DashboardRideCardComponent;
  let fixture: ComponentFixture<DashboardRideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
