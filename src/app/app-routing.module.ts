import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './utils/error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

// Lazy Loading the modules.

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
    canActivateChild: [AuthGuardService]
  },
  {
    path: "ride",
    loadChildren: "./features/ride/ride.module#RideModule",
    canActivateChild: [AuthGuardService]
  },
  {
    path: "drive",
    loadChildren: "./features/drive/drive.module#DriveModule",
    canActivateChild: [AuthGuardService]
  },
  {
    path: "profile",
    loadChildren: "./features/profile/profile.module#ProfileModule",
    canActivateChild: [AuthGuardService]
  },
  {
    path: "info",
    loadChildren: "./features/information/information.module#InformationModule"
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: {
      message: "Inhalt nicht gefunden!",
      statusCode: "404",
      subtitle: "Schicksal, kann man nix machen."
    }
  },
  {
    path: "**",
    redirectTo: "/not-found"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
