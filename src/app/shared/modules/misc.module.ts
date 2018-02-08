import {NgModule} from '@angular/core';
import {LoadingComponent} from '../../misc/loading/loading.component';
import {ErrorComponent} from '../../misc/error/error.component';
import {MaterialModule} from './material.module';


@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent
  ]
})
export class MiscModule { }
