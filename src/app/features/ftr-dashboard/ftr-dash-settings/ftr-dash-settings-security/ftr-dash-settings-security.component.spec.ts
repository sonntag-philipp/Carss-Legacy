import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashSettingsSecurityComponent } from './ftr-dash-settings-security.component';

describe('FtrDashSettingsSecurityComponent', () => {
  let component: FtrDashSettingsSecurityComponent;
  let fixture: ComponentFixture<FtrDashSettingsSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashSettingsSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashSettingsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
