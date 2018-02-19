import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveNewComponent } from './drive-new.component';

describe('DriveNewComponent', () => {
  let component: DriveNewComponent;
  let fixture: ComponentFixture<DriveNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
