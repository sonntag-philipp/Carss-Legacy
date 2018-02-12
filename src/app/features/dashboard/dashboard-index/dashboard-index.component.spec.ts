import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashIndexComponent } from './dashboard-index.component';

describe('DashIndexComponent', () => {
  let component: DashIndexComponent;
  let fixture: ComponentFixture<DashIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
