import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrInfoComponent } from './ftr-info.component';

describe('FtrInfoComponent', () => {
  let component: FtrInfoComponent;
  let fixture: ComponentFixture<FtrInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
