import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrDriveIndexComponent } from './ftr-drive-index/ftr-drive-index.component';
import {FtrDriveRoutingModule} from './ftr-drive-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FtrDriveRoutingModule
  ],
  declarations: [
    FtrDriveIndexComponent
  ]
})
export class FtrDriveModule { }
