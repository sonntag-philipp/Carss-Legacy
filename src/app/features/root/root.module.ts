import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { RootRoutingModule } from './root-routing.module';
import { RootIndexComponent } from './root-index/root-index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { RootNewUserComponent } from './root-new-user/root-new-user.component';
import { RootLoginCardComponent } from './root-login-card/root-login-card.component';

@NgModule({
  imports: [
    CommonModule,
    RootRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule
  ],
  declarations: [
    RootComponent,
    RootIndexComponent,
    RootNewUserComponent,
    RootLoginCardComponent
  ],
  bootstrap: [
    RootIndexComponent
  ]
})
export class RootModule { }
