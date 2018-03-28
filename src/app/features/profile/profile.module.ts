import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule, MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfilePresenterComponent} from './profile-presenter/profile-presenter.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {ProfileService} from './profile.service';
import { ProfilePresenterCarComponent } from './profile-presenter/profile-presenter-car/profile-presenter-car.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorCarComponent } from './profile-editor/profile-editor-car/profile-editor-car.component';
import { UtilsModule } from '../../utils/utils.module';
import { BackendModule } from '../../backend/backend.module';
import { FrameModule } from '../frame/frame.module';
import { MapsModule } from '../maps/maps.module';

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
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    UtilsModule,
    BackendModule,
    FrameModule,
    MapsModule
  ],
  providers: [
    ProfileService
  ],
  declarations: [
    ProfilePresenterComponent,
    ProfileComponent,
    ProfilePresenterCarComponent,
    ProfileEditorComponent,
    ProfileEditorCarComponent
  ]
})
export class ProfileModule { }
