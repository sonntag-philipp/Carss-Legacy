import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideSearchComponent } from './ride-search.component';

describe('RideSearchComponent', () => {
  let component: RideSearchComponent;
  let fixture: ComponentFixture<RideSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
