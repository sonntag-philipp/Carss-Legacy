import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmPlaceMapPresenterComponent } from './agm-place-map-presenter.component';

describe('AgmPlaceMapPresenterComponent', () => {
  let component: AgmPlaceMapPresenterComponent;
  let fixture: ComponentFixture<AgmPlaceMapPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmPlaceMapPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmPlaceMapPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
