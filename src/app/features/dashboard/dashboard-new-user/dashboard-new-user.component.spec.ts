import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewUserComponent } from './dashboard-new-user.component';

describe('DashboardNewUserComponent', () => {
  let component: DashboardNewUserComponent;
  let fixture: ComponentFixture<DashboardNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
