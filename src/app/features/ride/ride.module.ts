import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RideIndexComponent } from './ride-index/ride-index.component';
import { RideRoutingModule } from './ride-routing.module';
import { RideComponent } from './ride/ride.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatTableModule } from '@angular/material';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { RideSearchComponent } from './ride-search/ride-search.component';

@NgModule({
  imports: [
    // Material Imports:
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatCardModule,
    MatTableModule,

    // AngularFire:
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Miscellaneous:
    CommonModule,
    FormsModule,
    RideRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    RideIndexComponent,
    RideComponent,
    RideSearchComponent
  ]
})
export class RideModule {
}
