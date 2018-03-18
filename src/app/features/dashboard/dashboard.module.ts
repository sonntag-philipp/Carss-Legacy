import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DATE_FORMATS, MAT_DATE_LOCALE,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatExpansionModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule, MatSelectModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {DashboardSettingsComponent} from './dashboard-settings/dashboard-settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardIndexComponent} from './dashboard-index/dashboard-index.component';
import {DashboardSettingsSecurityComponent} from './dashboard-settings/dashboard-settings-security/dashboard-settings-security.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardSettingsAccountsComponent } from './dashboard-settings/dashboard-settings-accounts/dashboard-settings-accounts.component';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { DashboardIndexDriveComponent } from './dashboard-index/dashboard-index-drive/dashboard-index-drive.component';
import { DashboardIndexRideComponent } from './dashboard-index/dashboard-index-ride/dashboard-index-ride.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MaterialTimeControlModule} from '../../misc/material-time-control.module';

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
    MatTooltipModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatMenuModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTabsModule,
    MaterialTimeControlModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDif4IdA1F5l4jDiuEDv-xlAG3d-NnsJl8",
      libraries: ["places"]
    }),

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardIndexComponent,
    DashboardComponent,
    DashboardSettingsComponent,
    DashboardSettingsSecurityComponent,
    DashboardSettingsAccountsComponent,
    DashboardIndexDriveComponent,
    DashboardIndexRideComponent
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'de',
    }
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { }
