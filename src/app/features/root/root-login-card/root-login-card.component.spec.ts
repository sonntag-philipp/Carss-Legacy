import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootLoginCardComponent } from './root-login-card.component';

describe('RootLoginCardComponent', () => {
  let component: RootLoginCardComponent;
  let fixture: ComponentFixture<RootLoginCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootLoginCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
