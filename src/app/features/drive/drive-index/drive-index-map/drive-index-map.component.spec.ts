import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveIndexMapComponent } from './drive-index-map.component';

describe('DriveIndexMapComponent', () => {
  let component: DriveIndexMapComponent;
  let fixture: ComponentFixture<DriveIndexMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveIndexMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveIndexMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
