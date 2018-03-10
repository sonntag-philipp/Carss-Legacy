import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveIndexRouteComponent } from './drive-index-route.component';

describe('DriveIndexRouteComponent', () => {
  let component: DriveIndexRouteComponent;
  let fixture: ComponentFixture<DriveIndexRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveIndexRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveIndexRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
