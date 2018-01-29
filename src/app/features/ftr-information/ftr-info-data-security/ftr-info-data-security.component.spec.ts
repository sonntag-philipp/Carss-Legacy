import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrInfoDataSecurityComponent } from './ftr-info-data-security.component';

describe('FtrInfoDataSecurityComponent', () => {
  let component: FtrInfoDataSecurityComponent;
  let fixture: ComponentFixture<FtrInfoDataSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrInfoDataSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrInfoDataSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
