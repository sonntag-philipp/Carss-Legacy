import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrRideIndexComponent } from './ftr-ride-index.component';

describe('FtrRideIndexComponent', () => {
  let component: FtrRideIndexComponent;
  let fixture: ComponentFixture<FtrRideIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrRideIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrRideIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
