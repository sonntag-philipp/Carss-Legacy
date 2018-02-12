import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSettingsSecurityComponent } from './dashboard-settings-security.component';

describe('DashboardSettingsSecurityComponent', () => {
  let component: DashboardSettingsSecurityComponent;
  let fixture: ComponentFixture<DashboardSettingsSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSettingsSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSettingsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
