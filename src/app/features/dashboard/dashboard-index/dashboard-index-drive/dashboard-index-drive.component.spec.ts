import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexDriveComponent } from './dashboard-index-drive.component';

describe('DashboardIndexDriveComponent', () => {
  let component: DashboardIndexDriveComponent;
  let fixture: ComponentFixture<DashboardIndexDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIndexDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
