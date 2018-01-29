import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashIndexComponent } from './ftr-dash-index.component';

describe('FtrDashIndexComponent', () => {
  let component: FtrDashIndexComponent;
  let fixture: ComponentFixture<FtrDashIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
