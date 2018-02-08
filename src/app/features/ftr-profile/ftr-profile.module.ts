import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtrProfilePresenterComponent } from './ftr-profile-presenter/ftr-profile-presenter.component';
import { FtrProfileEditorComponent } from './ftr-profile-editor/ftr-profile-editor.component';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDividerModule, MatInputModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FtrProfileRoutingModule} from './ftr-profile-routing.module';
import { FtrProfileComponent } from './ftr-profile/ftr-profile.component';
import { FtrProfileToolbarComponent } from './ftr-profile-toolbar/ftr-profile-toolbar.component';

@NgModule({
  imports: [
    // Material Imports:
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FtrProfileRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    FtrProfilePresenterComponent,
    FtrProfileEditorComponent,
    FtrProfileComponent,
    FtrProfileToolbarComponent
  ]
})
export class FtrProfileModule { }
