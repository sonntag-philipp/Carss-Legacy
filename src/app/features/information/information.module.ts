import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InformationRoutingModule} from './information-routing.module';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {InformationComponent} from './information/information.component';
import {InformationConditionsComponent} from './information-conditions/information-conditions.component';
import {InformationContactComponent} from './information-contact/information-contact.component';
import {InformationSecurityComponent} from './information-security/information-security.component';
import { InformationFaqComponent } from './information-faq/information-faq.component';

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
    InformationRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    InformationComponent,
    InformationConditionsComponent,
    InformationContactComponent,
    InformationSecurityComponent,
    InformationFaqComponent
  ],
  bootstrap: [
    InformationComponent
  ]
})
export class InformationModule { }
