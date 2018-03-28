import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseMapComponent } from './choose-map/choose-map.component';
import { RouteMapComponent } from './route-map/route-map.component';
import { MatCardModule } from '@angular/material';
import { MapsInputDirective } from './maps-input.directive';
import { AgmCoreModule } from '@agm/core';
import { PlaceIdPipe } from './place-id.pipe';
import { PlaceCoordsPipe } from './place-coords.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    AgmCoreModule
  ],
  declarations: [
    ChooseMapComponent,
    RouteMapComponent,
    MapsInputDirective,
    PlaceIdPipe,
    PlaceCoordsPipe
  ],
  exports: [
    ChooseMapComponent,
    RouteMapComponent
  ]
})
export class MapsModule { }
