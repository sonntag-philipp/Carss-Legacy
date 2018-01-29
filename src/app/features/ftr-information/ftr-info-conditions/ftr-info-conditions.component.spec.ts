import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrInfoConditionsComponent } from './ftr-info-conditions.component';

describe('FtrInfoConditionsComponent', () => {
  let component: FtrInfoConditionsComponent;
  let fixture: ComponentFixture<FtrInfoConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrInfoConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrInfoConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
