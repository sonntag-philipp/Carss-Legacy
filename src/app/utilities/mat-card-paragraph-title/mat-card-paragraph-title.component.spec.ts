import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardParagraphTitleComponent } from './mat-card-paragraph-title.component';

describe('MatCardParagraphTitleComponent', () => {
  let component: MatCardParagraphTitleComponent;
  let fixture: ComponentFixture<MatCardParagraphTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCardParagraphTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardParagraphTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
