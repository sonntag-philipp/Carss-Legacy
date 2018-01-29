import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrDriveIndexComponent } from './ftr-drive-index.component';

describe('FtrDriveIndexComponent', () => {
  let component: FtrDriveIndexComponent;
  let fixture: ComponentFixture<FtrDriveIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrDriveIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrDriveIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
