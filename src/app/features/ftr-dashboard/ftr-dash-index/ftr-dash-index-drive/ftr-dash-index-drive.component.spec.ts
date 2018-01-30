import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashIndexDriveComponent } from './ftr-dash-index-drive.component';

describe('FtrDashIndexDriveComponent', () => {
  let component: FtrDashIndexDriveComponent;
  let fixture: ComponentFixture<FtrDashIndexDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashIndexDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashIndexDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
