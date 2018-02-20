import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FtrInformationRoutingModule} from './information-routing.module';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {InformationComponent} from './information/information.component';
import {InformationIndexComponent} from './information-index/information-index.component';
import {InformationConditionsComponent} from './information-conditions/information-conditions.component';
import {InformationContactComponent} from './information-contact/information-contact.component';
import {InformationSecurityComponent} from './information-security/information-security.component';

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
    InformationComponent,
    InformationIndexComponent,
    InformationConditionsComponent,
    InformationContactComponent,
    InformationSecurityComponent
  ],
  bootstrap: [
    InformationComponent
  ]
})
export class InformationModule { }
