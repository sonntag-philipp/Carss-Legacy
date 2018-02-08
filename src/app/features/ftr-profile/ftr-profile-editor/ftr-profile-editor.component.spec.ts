import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrProfileEditorComponent } from './ftr-profile-editor.component';

describe('FtrProfileEditorComponent', () => {
  let component: FtrProfileEditorComponent;
  let fixture: ComponentFixture<FtrProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtrProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtrProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
