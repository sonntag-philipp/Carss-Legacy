import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashSettingsComponent } from './dashboard-settings.component';

describe('FtrDashSettingsComponent', () => {
  let component: FtrDashSettingsComponent;
  let fixture: ComponentFixture<FtrDashSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
