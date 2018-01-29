import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrRideIndexComponent } from './ftr-ride-index/ftr-ride-index.component';
import {FtrRideRoutingModule} from './ftr-ride-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FtrRideRoutingModule
  ],
  declarations: [FtrRideIndexComponent]
})
export class FtrRideModule { }
