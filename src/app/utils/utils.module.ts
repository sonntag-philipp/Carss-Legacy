import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AgmDirectionsDirective } from './agm-directions.directive';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DescriptionContainerComponent } from './description-container/description-container.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { TagContainerComponent } from './tag-container/tag-container.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { RideContainerComponent } from './ride-container/ride-container.component';

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
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    AgmCoreModule
  ],
  declarations: [
    ErrorComponent,
    InfoDialogComponent,
    AgmDirectionsDirective,
    DescriptionContainerComponent,
    ImageContainerComponent,
    TagContainerComponent,
    InputDialogComponent,
    RideContainerComponent
  ],
  entryComponents: [
    InputDialogComponent,
    InfoDialogComponent
  ],
  exports: [
    ErrorComponent,
    InfoDialogComponent,
    AgmDirectionsDirective,
    DescriptionContainerComponent,
    ImageContainerComponent,
    TagContainerComponent,
    RideContainerComponent
  ]
})
export class UtilsModule { }
