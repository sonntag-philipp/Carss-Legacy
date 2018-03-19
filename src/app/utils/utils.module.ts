import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipContainerComponent } from './chip-container/chip-container.component';
import { ErrorComponent } from './error/error.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AgmDirectionsDirective } from './agm-directions.directive';
import { AgmInputDirective } from './agm-input.directive';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

/**
 * The Utils module contains components and directives that can and should
 * be used anywhere inside the application.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,

    // Material Design:
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  declarations: [
    ChipContainerComponent,
    ErrorComponent,
    InfoDialogComponent,
    AgmDirectionsDirective,
    AgmInputDirective,
    FooterComponent,
    ToolbarComponent
  ],
  exports: [
    ChipContainerComponent,
    ErrorComponent,
    InfoDialogComponent,
    AgmDirectionsDirective,
    AgmInputDirective,
    FooterComponent,
    ToolbarComponent
  ]
})
export class UtilsModule { }
