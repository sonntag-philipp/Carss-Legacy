import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrameFooterComponent } from './frame-footer/frame-footer.component';
import { FrameToolbarComponent } from './frame-toolbar/frame-toolbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    FrameFooterComponent,
    FrameToolbarComponent
  ],
  exports: [
    FrameFooterComponent,
    FrameToolbarComponent
  ]
})
export class FrameModule { }
