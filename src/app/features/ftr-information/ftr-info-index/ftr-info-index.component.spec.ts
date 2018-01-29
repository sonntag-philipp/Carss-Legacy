import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrInfoIndexComponent } from './ftr-info-index.component';

describe('FtrInfoIndexComponent', () => {
  let component: FtrInfoIndexComponent;
  let fixture: ComponentFixture<FtrInfoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrInfoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrInfoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
