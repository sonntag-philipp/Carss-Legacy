import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { DashboardSettingsComponent} from './dashboard-settings/dashboard-settings.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DashboardIndexComponent} from './dashboard-index/dashboard-index.component';
import { DashboardSettingsSecurityComponent} from './dashboard-settings/dashboard-settings-security/dashboard-settings-security.component';
import { DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardSettingsAccountsComponent } from './dashboard-settings/dashboard-settings-accounts/dashboard-settings-accounts.component';
import { FormsModule} from '@angular/forms';
import { DashboardIndexDriveComponent } from './dashboard-index/dashboard-index-drive/dashboard-index-drive.component';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { BackendModule } from '../../backend/backend.module';
import { UtilsModule } from '../../utils/utils.module';
import { FrameModule } from '../frame/frame.module';
import { MapsModule } from '../maps/maps.module';
import { DashboardIndexChargeMapComponent } from './dashboard-index/dashboard-index-charge-map/dashboard-index-charge-map.component';

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

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    BackendModule,
    UtilsModule,
    FrameModule,
    MapsModule
  ],
  declarations: [
    DashboardIndexComponent,
    DashboardComponent,
    DashboardSettingsComponent,
    DashboardSettingsSecurityComponent,
    DashboardSettingsAccountsComponent,
    DashboardIndexDriveComponent,
    DashboardIndexChargeMapComponent
  ],
  entryComponents: [
    DashboardIndexChargeMapComponent
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { }
