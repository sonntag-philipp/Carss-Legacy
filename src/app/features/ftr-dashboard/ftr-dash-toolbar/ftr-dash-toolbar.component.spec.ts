import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashToolbarComponent } from './ftr-dash-toolbar.component';

describe('FtrDashToolbarComponent', () => {
  let component: FtrDashToolbarComponent;
  let fixture: ComponentFixture<FtrDashToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
