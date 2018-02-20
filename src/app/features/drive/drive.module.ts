import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriveIndexComponent} from './drive-index/drive-index.component';
import {DriveRoutingModule} from './drive-routing.module';
import { DriveComponent } from './drive/drive.component';
import { DriveEditorComponent } from './drive-editor/drive-editor.component';
import { DriveNewComponent } from './drive-new/drive-new.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
import {MiscModule} from '../../shared/modules/misc.module';
import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';

@NgModule({
  imports: [
    // Material Imports:
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDif4IdA1F5l4jDiuEDv-xlAG3d-NnsJl8"
    }),

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    DriveRoutingModule,
    FlexLayoutModule,
    MiscModule
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  declarations: [
    DriveIndexComponent,
    DriveComponent,
    DriveEditorComponent,
    DriveNewComponent
  ]
})
export class DriveModule { }
