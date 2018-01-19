import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardParagraphComponent } from './mat-card-paragraph.component';

describe('MatCardParagraphComponent', () => {
  let component: MatCardParagraphComponent;
  let fixture: ComponentFixture<MatCardParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCardParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
