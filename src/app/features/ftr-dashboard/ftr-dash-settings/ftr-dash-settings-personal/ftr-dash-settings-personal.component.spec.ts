import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashSettingsPersonalComponent } from './ftr-dash-settings-personal.component';

describe('FtrDashSettingsPersonalComponent', () => {
  let component: FtrDashSettingsPersonalComponent;
  let fixture: ComponentFixture<FtrDashSettingsPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashSettingsPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashSettingsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
