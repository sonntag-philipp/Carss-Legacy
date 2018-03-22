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
import {AgmCoreModule} from '@agm/core';
import { ProfilePresenterCarComponent } from './profile-presenter/profile-presenter-car/profile-presenter-car.component';
import { ProfilePresenterMapComponent } from './profile-presenter/profile-presenter-map/profile-presenter-map.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorCarComponent } from './profile-editor/profile-editor-car/profile-editor-car.component';
import { ProfileEditorMapComponent } from './profile-editor/profile-editor-map/profile-editor-map.component';
import { UtilsModule } from '../../utils/utils.module';

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
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDif4IdA1F5l4jDiuEDv-xlAG3d-NnsJl8",
      libraries: ["places"]
    }),

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    UtilsModule
  ],
  providers: [
    ProfileService
  ],
  declarations: [
    ProfilePresenterComponent,
    ProfileComponent,
    ProfilePresenterCarComponent,
    ProfilePresenterMapComponent,
    ProfileEditorComponent,
    ProfileEditorCarComponent,
    ProfileEditorMapComponent
  ]
})
export class ProfileModule { }
