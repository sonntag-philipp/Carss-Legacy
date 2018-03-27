import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootIndexComponent } from './root-index.component';

describe('RootIndexComponent', () => {
  let component: RootIndexComponent;
  let fixture: ComponentFixture<RootIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
