import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePresenterMapComponent } from './profile-presenter-map.component';

describe('ProfilePresenterMapComponent', () => {
  let component: ProfilePresenterMapComponent;
  let fixture: ComponentFixture<ProfilePresenterMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePresenterMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePresenterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
