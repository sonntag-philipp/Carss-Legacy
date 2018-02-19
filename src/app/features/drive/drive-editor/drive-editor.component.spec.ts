import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveEditorComponent } from './drive-editor.component';

describe('DriveEditorComponent', () => {
  let component: DriveEditorComponent;
  let fixture: ComponentFixture<DriveEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
