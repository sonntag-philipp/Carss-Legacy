import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrProfileToolbarComponent } from './ftr-profile-toolbar.component';

describe('FtrProfileToolbarComponent', () => {
  let component: FtrProfileToolbarComponent;
  let fixture: ComponentFixture<FtrProfileToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrProfileToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrProfileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
