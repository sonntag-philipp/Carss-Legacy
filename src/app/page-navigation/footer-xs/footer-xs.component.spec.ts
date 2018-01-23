import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterXsComponent } from './footer-xs.component';

describe('FooterXsComponent', () => {
  let component: FooterXsComponent;
  let fixture: ComponentFixture<FooterXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterXsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
