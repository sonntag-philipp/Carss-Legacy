import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidePresenterComponent } from './ride-presenter.component';

describe('RidePresenterComponent', () => {
  let component: RidePresenterComponent;
  let fixture: ComponentFixture<RidePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
