import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationToolbarComponent } from './information-toolbar.component';

describe('InformationToolbarComponent', () => {
  let component: InformationToolbarComponent;
  let fixture: ComponentFixture<InformationToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
