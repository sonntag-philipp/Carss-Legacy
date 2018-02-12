import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrProfileChipsComponent } from './profile-chips.component';

describe('FtrProfileChipsComponent', () => {
  let component: FtrProfileChipsComponent;
  let fixture: ComponentFixture<FtrProfileChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrProfileChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrProfileChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
