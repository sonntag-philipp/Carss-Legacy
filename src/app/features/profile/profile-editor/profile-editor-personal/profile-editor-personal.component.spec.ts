import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorPersonalComponent } from './profile-editor-personal.component';

describe('ProfileEditorPersonalComponent', () => {
  let component: ProfileEditorPersonalComponent;
  let fixture: ComponentFixture<ProfileEditorPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
