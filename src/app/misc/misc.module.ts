import {NgModule} from '@angular/core';
import {ErrorComponent} from './components/error/error.component';
import {MaterialModule} from '../shared/modules/material.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmDirectionsDirective} from './directives/agm-directions.directive';
import {AgmInputDirective} from './directives/agm-input.directive';
import {MatSnackBarModule} from '@angular/material';


@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MatSnackBarModule
  ],
  exports: [
    AgmDirectionsDirective,
    ErrorComponent,
    AgmInputDirective,
    MatSnackBarModule
  ],
  declarations: [
    ErrorComponent,
    AgmDirectionsDirective,
    AgmInputDirective
  ]
})
export class MiscModule { }
