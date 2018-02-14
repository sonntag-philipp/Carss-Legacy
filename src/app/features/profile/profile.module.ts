import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDividerModule, MatInputModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfilePresenterComponent} from './profile-presenter/profile-presenter.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileChipsComponent} from './profile-chips/profile-chips.component';
import { ProfileParagraphComponent } from './profile-paragraph/profile-paragraph.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileInputComponent } from './profile-input/profile-input.component';
import {FormsModule} from '@angular/forms';
import {ProfileService} from './profile.service';

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
    FormsModule,
    ProfileRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    ProfileService
  ],
  declarations: [
    ProfilePresenterComponent,
    ProfileComponent,
    ProfileChipsComponent,
    ProfileParagraphComponent,
    ProfileEditorComponent,
    ProfileInputComponent
  ]
})
export class ProfileModule { }
