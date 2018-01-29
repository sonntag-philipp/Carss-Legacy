import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrInfoContactComponent } from './ftr-info-contact.component';

describe('FtrInfoContactComponent', () => {
  let component: FtrInfoContactComponent;
  let fixture: ComponentFixture<FtrInfoContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrInfoContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrInfoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
