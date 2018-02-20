import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RideIndexComponent} from './ride-index.component';

describe('FtrRideIndexComponent', () => {
  let component: RideIndexComponent;
  let fixture: ComponentFixture<RideIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
