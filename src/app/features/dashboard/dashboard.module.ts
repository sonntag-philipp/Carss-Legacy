import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatTableModule,
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
    DashboardSettingsAccountsComponent
  ],
  providers: [
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { }
