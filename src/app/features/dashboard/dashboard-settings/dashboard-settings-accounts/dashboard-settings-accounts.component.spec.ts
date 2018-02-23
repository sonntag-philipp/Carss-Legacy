import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSettingsAccountsComponent } from './dashboard-settings-accounts.component';

describe('DashboardSettingsAccountsComponent', () => {
  let component: DashboardSettingsAccountsComponent;
  let fixture: ComponentFixture<DashboardSettingsAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSettingsAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSettingsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
