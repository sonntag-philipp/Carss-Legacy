import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipContainerComponent } from './chip-container.component';

describe('ChipContainerComponent', () => {
  let component: ChipContainerComponent;
  let fixture: ComponentFixture<ChipContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
