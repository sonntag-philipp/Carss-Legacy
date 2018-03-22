import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarService } from './toolbar.service';
import { GlobalsService } from './globals.service';
import { AuthGuardService } from './auth-guard.service';
import { UsersService } from './users.service';
import { BackendService } from './backend.service';

/**
 * This module provides the services used in the entire application.
 * It only needs to be imported inside the app.module.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuardService,
    GlobalsService,
    ToolbarService,
    UsersService,
    BackendService
  ]
})
export class ServicesModule { }
