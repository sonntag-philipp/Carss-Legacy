import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDashComponent } from './ftr-dash.component';

describe('FtrDashComponent', () => {
  let component: FtrDashComponent;
  let fixture: ComponentFixture<FtrDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
