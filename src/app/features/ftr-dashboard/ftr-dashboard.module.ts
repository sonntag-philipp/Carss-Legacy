import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrDashIndexComponent } from './ftr-dash-index/ftr-dash-index.component';
import { FtrDashboardRoutingModule } from './ftr-dashboard-routing.module';
import { FtrDashComponent } from './ftr-dash/ftr-dash.component';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FtrInformationRoutingModule} from '../ftr-information/ftr-information-routing.module';

@NgModule({
  imports: [
    // Material Imports:
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,

    // AngularFire:
    AngularFireAuthModule,

    // Miscellaneous:
    CommonModule,
    FtrDashboardRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    FtrDashIndexComponent,
    FtrDashComponent
  ],
  bootstrap: [
    FtrDashComponent
  ]
})
export class FtrDashboardModule { }
