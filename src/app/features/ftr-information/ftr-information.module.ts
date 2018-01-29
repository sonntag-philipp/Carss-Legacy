import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FtrInformationRoutingModule} from './ftr-information-routing.module';
import { FtrInfoIndexComponent } from './ftr-info-index/ftr-info-index.component';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FtrInfoConditionsComponent } from './ftr-info-conditions/ftr-info-conditions.component';
import { FtrInfoComponent } from './ftr-info/ftr-info.component';
import { FtrInfoContactComponent } from './ftr-info-contact/ftr-info-contact.component';
import { FtrInfoDataSecurityComponent } from './ftr-info-data-security/ftr-info-data-security.component';

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
    FtrInformationRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    FtrInfoComponent,
    FtrInfoIndexComponent,
    FtrInfoConditionsComponent,
    FtrInfoContactComponent,
    FtrInfoDataSecurityComponent
  ],
  bootstrap: [
    FtrInfoComponent
  ]
})
export class FtrInformationModule { }
