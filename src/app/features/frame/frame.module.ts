import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrameFooterComponent } from './frame-footer/frame-footer.component';
import { FrameToolbarComponent } from './frame-toolbar/frame-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
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
