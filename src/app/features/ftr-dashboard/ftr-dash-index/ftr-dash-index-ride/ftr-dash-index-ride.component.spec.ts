import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashIndexRideComponent } from './ftr-dash-index-ride.component';

describe('FtrDashIndexRideComponent', () => {
  let component: FtrDashIndexRideComponent;
  let fixture: ComponentFixture<FtrDashIndexRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashIndexRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashIndexRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
