import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InformationRoutingModule} from './information-routing.module';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {InformationComponent} from './information/information.component';
import {InformationConditionsComponent} from './information-conditions/information-conditions.component';
import {InformationContactComponent} from './information-contact/information-contact.component';
import {InformationSecurityComponent} from './information-security/information-security.component';
import { InformationFaqComponent } from './information-faq/information-faq.component';
import { InformationToolbarComponent } from './information-toolbar/information-toolbar.component';
import { InformationAboutComponent } from './information-about/information-about.component';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    // Material Imports:
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,

    // AngularFire:
    AngularFireAuthModule,

    // Miscellaneous:
    CommonModule,
    InformationRoutingModule,
    FlexLayoutModule,
    MarkdownModule
  ],
  declarations: [
    InformationComponent,
    InformationConditionsComponent,
    InformationContactComponent,
    InformationSecurityComponent,
    InformationFaqComponent,
    InformationToolbarComponent,
    InformationAboutComponent
  ],
  bootstrap: [
    InformationComponent
  ]
})
export class InformationModule { }
