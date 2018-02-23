import {NgModule} from '@angular/core';
import {ErrorComponent} from '../../misc/error/error.component';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import {DirectionsMapDirective} from '../../misc/agm-directions/agm-directions.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ErrorComponent,
    DirectionsMapDirective
  ],
  declarations: [
    ErrorComponent,
    DirectionsMapDirective
  ]
})
export class MiscModule { }
