import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDriveCardComponent } from './dashboard-drive-card.component';

describe('DashboardDriveCardComponent', () => {
  let component: DashboardDriveCardComponent;
  let fixture: ComponentFixture<DashboardDriveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDriveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDriveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
