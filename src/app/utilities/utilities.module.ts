import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardParagraphComponent } from './mat-card-paragraph/mat-card-paragraph.component';
import { MatCardParagraphTitleComponent } from './mat-card-paragraph-title/mat-card-paragraph-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MatCardParagraphComponent,
    MatCardParagraphTitleComponent
  ],
  exports: [
    MatCardParagraphComponent,
    MatCardParagraphTitleComponent
  ]
})
export class UtilitiesModule { }
