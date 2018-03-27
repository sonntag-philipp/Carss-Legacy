import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFaqComponent } from './information-faq.component';

describe('InformationFaqComponent', () => {
  let component: InformationFaqComponent;
  let fixture: ComponentFixture<InformationFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
