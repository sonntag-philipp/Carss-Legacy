import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrDashIndexComponent } from './ftr-dash-index/ftr-dash-index.component';
import { FtrDashboardRoutingModule } from './ftr-dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FtrDashboardRoutingModule
  ],
  declarations: [FtrDashIndexComponent]
})
export class FtrDashboardModule { }
