import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParagraphComponent } from './profile-paragraph.component';

describe('ProfileParagraphComponent', () => {
  let component: ProfileParagraphComponent;
  let fixture: ComponentFixture<ProfileParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
