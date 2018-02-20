import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
