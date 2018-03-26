import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AgmDirectionsDirective } from './agm-directions.directive';
import { AgmInputDirective } from './agm-input.directive';
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
import { AgmPlaceMapComponent } from './agm-place-map/agm-place-map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmPlaceMapPresenterComponent } from './agm-place-map-presenter/agm-place-map-presenter.component';

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
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDif4IdA1F5l4jDiuEDv-xlAG3d-NnsJl8",
      libraries: ["places"]
    }),
  ],
  declarations: [
    ErrorComponent,
    InfoDialogComponent,
    AgmDirectionsDirective,
    AgmInputDirective,
    DescriptionContainerComponent,
    ImageContainerComponent,
    TagContainerComponent,
    InputDialogComponent,
    AgmPlaceMapComponent,
    AgmPlaceMapPresenterComponent
  ],
  entryComponents: [
    InputDialogComponent,
    InfoDialogComponent
  ],
  exports: [
    ErrorComponent,
    InfoDialogComponent,
    AgmDirectionsDirective,
    AgmInputDirective,
    DescriptionContainerComponent,
    ImageContainerComponent,
    TagContainerComponent,
    AgmPlaceMapComponent,
    AgmPlaceMapPresenterComponent
  ]
})
export class UtilsModule { }
