import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmPlaceMapComponent } from './agm-place-map.component';

describe('AgmPlaceMapComponent', () => {
  let component: AgmPlaceMapComponent;
  let fixture: ComponentFixture<AgmPlaceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmPlaceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmPlaceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
