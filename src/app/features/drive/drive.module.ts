import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MiscModule} from '../../shared/modules/misc.module';
import {DriveIndexComponent} from './drive-index/drive-index.component';
import {DriveRoutingModule} from './drive-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DriveRoutingModule,
    MiscModule
  ],
  declarations: [
    DriveIndexComponent
  ]
})
export class DriveModule { }
