import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameToolbarComponent } from './frame-toolbar.component';

describe('FrameToolbarComponent', () => {
  let component: FrameToolbarComponent;
  let fixture: ComponentFixture<FrameToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
