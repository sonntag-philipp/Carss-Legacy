import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideContainerComponent } from './ride-container.component';

describe('RideContainerComponent', () => {
  let component: RideContainerComponent;
  let fixture: ComponentFixture<RideContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
