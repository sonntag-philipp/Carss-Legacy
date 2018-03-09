import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveIndexFormComponent } from './drive-index-form.component';

describe('DriveIndexFormComponent', () => {
  let component: DriveIndexFormComponent;
  let fixture: ComponentFixture<DriveIndexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveIndexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveIndexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
