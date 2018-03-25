import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DATE_LOCALE,
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
import { AgmCoreModule} from '@agm/core';
import { DashboardIndexDriveComponent } from './dashboard-index/dashboard-index-drive/dashboard-index-drive.component';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatTimeControlModule } from '../../modules/mat-time-control/mat-time-control.module';
import { DashboardNewUserComponent } from './dashboard-new-user/dashboard-new-user.component';
import { BackendModule } from '../../backend/backend.module';
import { UtilsModule } from '../../utils/utils.module';

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
    MatTimeControlModule,

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    BackendModule,
    UtilsModule
  ],
  declarations: [
    DashboardIndexComponent,
    DashboardComponent,
    DashboardSettingsComponent,
    DashboardSettingsSecurityComponent,
    DashboardSettingsAccountsComponent,
    DashboardIndexDriveComponent,
    DashboardNewUserComponent
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
