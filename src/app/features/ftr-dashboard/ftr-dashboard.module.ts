import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrDashIndexComponent } from './ftr-dash-index/ftr-dash-index.component';
import { FtrDashboardRoutingModule } from './ftr-dashboard-routing.module';
import { FtrDashComponent } from './ftr-dash/ftr-dash.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FtrInformationRoutingModule} from '../ftr-information/ftr-information-routing.module';
import { FtrDashIndexDriveComponent } from './ftr-dash-index/ftr-dash-index-drive/ftr-dash-index-drive.component';
import { FtrDashIndexRideComponent } from './ftr-dash-index/ftr-dash-index-ride/ftr-dash-index-ride.component';
import { FtrDashSettingsComponent } from './ftr-dash-settings/ftr-dash-settings.component';

@NgModule({
  imports: [
    // Material Imports:
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,

    // AngularFire:
    AngularFireAuthModule,

    // Miscellaneous:
    CommonModule,
    FtrDashboardRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    FtrDashIndexComponent,
    FtrDashComponent,
    FtrDashIndexDriveComponent,
    FtrDashIndexRideComponent,
    FtrDashSettingsComponent
  ],
  bootstrap: [
    FtrDashComponent
  ]
})
export class FtrDashboardModule { }
