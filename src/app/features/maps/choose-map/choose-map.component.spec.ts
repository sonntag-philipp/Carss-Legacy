import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMapComponent } from './choose-map.component';

describe('ChooseMapComponent', () => {
  let component: ChooseMapComponent;
  let fixture: ComponentFixture<ChooseMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
