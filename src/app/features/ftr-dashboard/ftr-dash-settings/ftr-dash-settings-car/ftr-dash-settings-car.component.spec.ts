import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashSettingsCarComponent } from './ftr-dash-settings-car.component';

describe('FtrDashSettingsCarComponent', () => {
  let component: FtrDashSettingsCarComponent;
  let fixture: ComponentFixture<FtrDashSettingsCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashSettingsCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashSettingsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
