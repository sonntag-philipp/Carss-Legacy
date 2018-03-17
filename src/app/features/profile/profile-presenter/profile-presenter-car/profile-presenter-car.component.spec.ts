import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePresenterCarComponent } from './profile-presenter-car.component';

describe('ProfilePresenterCarComponent', () => {
  let component: ProfilePresenterCarComponent;
  let fixture: ComponentFixture<ProfilePresenterCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePresenterCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePresenterCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
