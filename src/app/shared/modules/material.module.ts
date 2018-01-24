import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule,
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
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
