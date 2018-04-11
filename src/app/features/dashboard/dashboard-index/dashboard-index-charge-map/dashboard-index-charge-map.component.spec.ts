import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexChargeMapComponent } from './dashboard-index-charge-map.component';

describe('DashboardIndexChargeMapComponent', () => {
  let component: DashboardIndexChargeMapComponent;
  let fixture: ComponentFixture<DashboardIndexChargeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIndexChargeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexChargeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
