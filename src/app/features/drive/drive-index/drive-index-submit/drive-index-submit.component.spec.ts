import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveIndexSubmitComponent } from './drive-index-submit.component';

describe('DriveIndexSubmitComponent', () => {
  let component: DriveIndexSubmitComponent;
  let fixture: ComponentFixture<DriveIndexSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveIndexSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveIndexSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
