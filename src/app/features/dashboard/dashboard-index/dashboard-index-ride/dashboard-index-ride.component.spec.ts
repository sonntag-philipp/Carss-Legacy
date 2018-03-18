import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexRideComponent } from './dashboard-index-ride.component';

describe('DashboardIndexRideComponent', () => {
  let component: DashboardIndexRideComponent;
  let fixture: ComponentFixture<DashboardIndexRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIndexRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
