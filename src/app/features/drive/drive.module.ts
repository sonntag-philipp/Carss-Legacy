import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriveIndexComponent} from './drive-index/drive-index.component';
import {DriveRoutingModule} from './drive-routing.module';
import { DriveComponent } from './drive/drive.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatOptionModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
import {MiscModule} from '../../misc/misc.module';
import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';

@NgModule({
  imports: [
    // Material Imports:
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
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
    ReactiveFormsModule,
    DriveRoutingModule,
    FlexLayoutModule,
    MiscModule
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  declarations: [
    DriveIndexComponent,
    DriveComponent
  ]
})
export class DriveModule { }
