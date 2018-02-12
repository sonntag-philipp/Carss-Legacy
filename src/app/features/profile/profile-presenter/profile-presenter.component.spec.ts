import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrProfilePresenterComponent } from './profile-presenter.component';

describe('FtrProfilePresenterComponent', () => {
  let component: FtrProfilePresenterComponent;
  let fixture: ComponentFixture<FtrProfilePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrProfilePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrProfilePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
