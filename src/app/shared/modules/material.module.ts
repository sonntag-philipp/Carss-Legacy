import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTableModule, MatTabsModule,
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
  ]
})
export class MaterialModule { }
