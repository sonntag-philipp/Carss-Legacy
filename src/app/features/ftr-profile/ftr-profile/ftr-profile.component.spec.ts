import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrProfileComponent } from './ftr-profile.component';

describe('FtrProfileComponent', () => {
  let component: FtrProfileComponent;
  let fixture: ComponentFixture<FtrProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
