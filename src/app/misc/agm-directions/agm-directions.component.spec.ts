import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmDirectionsComponent } from './agm-directions.component';

describe('AgmDirectionsComponent', () => {
  let component: AgmDirectionsComponent;
  let fixture: ComponentFixture<AgmDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
