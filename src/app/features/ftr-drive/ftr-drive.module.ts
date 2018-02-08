import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrDriveIndexComponent } from './ftr-drive-index/ftr-drive-index.component';
import {FtrDriveRoutingModule} from './ftr-drive-routing.module';
import {AppModule} from '../../app.module';
import {LoadingComponent} from '../../misc/loading/loading.component';
import {MiscModule} from '../../shared/modules/misc.module';

@NgModule({
  imports: [
    CommonModule,
    FtrDriveRoutingModule,
    MiscModule
  ],
  declarations: [
    FtrDriveIndexComponent
  ]
})
export class FtrDriveModule { }
