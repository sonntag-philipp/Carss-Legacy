import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootNewUserComponent } from './root-new-user.component';

describe('RootNewUserComponent', () => {
  let component: RootNewUserComponent;
  let fixture: ComponentFixture<RootNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
