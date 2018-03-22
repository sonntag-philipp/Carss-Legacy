import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorMapComponent } from './profile-editor-map.component';

describe('ProfileEditorMapComponent', () => {
  let component: ProfileEditorMapComponent;
  let fixture: ComponentFixture<ProfileEditorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
