import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashSettingsPlatformsComponent } from './ftr-dash-settings-platforms.component';

describe('FtrDashSettingsPlatformsComponent', () => {
  let component: FtrDashSettingsPlatformsComponent;
  let fixture: ComponentFixture<FtrDashSettingsPlatformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashSettingsPlatformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashSettingsPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
