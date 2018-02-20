import {NgModule} from '@angular/core';
import {LoadingComponent} from '../../misc/loading/loading.component';
import {ErrorComponent} from '../../misc/error/error.component';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import {AgmDirectionsComponent} from '../../misc/agm-directions/agm-directions.component';


@NgModule({
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    AgmDirectionsComponent
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    AgmDirectionsComponent
  ]
})
export class MiscModule { }
