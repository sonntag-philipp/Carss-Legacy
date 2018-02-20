import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RideIndexComponent} from './ride-index/ride-index.component';
import {RideRoutingModule} from './ride-routing.module';
import { RideComponent } from './ride/ride.component';

@NgModule({
  imports: [
    CommonModule,
    RideRoutingModule
  ],
  declarations: [
    RideIndexComponent,
    RideComponent
  ]
})
export class RideModule { }
