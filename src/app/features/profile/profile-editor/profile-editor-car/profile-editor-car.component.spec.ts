import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorCarComponent } from './profile-editor-car.component';

describe('ProfileEditorCarComponent', () => {
  let component: ProfileEditorCarComponent;
  let fixture: ComponentFixture<ProfileEditorCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
