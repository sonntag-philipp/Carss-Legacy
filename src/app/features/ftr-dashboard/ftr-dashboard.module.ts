import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrDashIndexComponent } from './ftr-dash-index/ftr-dash-index.component';
import { FtrDashboardRoutingModule } from './ftr-dashboard-routing.module';
import { FtrDashComponent } from './ftr-dash/ftr-dash.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule, MatRadioModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FtrDashSettingsComponent } from './ftr-dash-settings/ftr-dash-settings.component';
import { FtrDashToolbarComponent } from './ftr-dash-toolbar/ftr-dash-toolbar.component';
import { FtrDashSettingsCarComponent } from './ftr-dash-settings/ftr-dash-settings-car/ftr-dash-settings-car.component';
import { FtrDashSettingsPlatformsComponent } from './ftr-dash-settings/ftr-dash-settings-platforms/ftr-dash-settings-platforms.component';
import { FtrDashSettingsPersonalComponent } from './ftr-dash-settings/ftr-dash-settings-personal/ftr-dash-settings-personal.component';
import { FtrDashSettingsSecurityComponent } from './ftr-dash-settings/ftr-dash-settings-security/ftr-dash-settings-security.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AccountService} from './shared/services/account.service';

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

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FtrDashboardRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    FtrDashIndexComponent,
    FtrDashComponent,
    FtrDashSettingsComponent,
    FtrDashToolbarComponent,
    FtrDashSettingsCarComponent,
    FtrDashSettingsPlatformsComponent,
    FtrDashSettingsPersonalComponent,
    FtrDashSettingsSecurityComponent
  ],
  providers: [
    AccountService
  ],
  bootstrap: [
    FtrDashComponent
  ]
})
export class FtrDashboardModule { }
