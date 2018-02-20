import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './misc/error/error.component';
import {AuthGuardService} from './shared/services/auth-guard.service';

// Lazy Loading the modules.

const appRoutes: Routes = [
  {
    path: "dashboard",
    loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
    canActivateChild: [AuthGuardService]
  },
  {
    path: "ride",
    loadChildren: "./features/ftr-ride/ftr-ride.module#FtrRideModule",
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
    path: "",
    loadChildren: "./features/information/information.module#InformationModule"
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: {
      message: "Inhalt nicht gefunden!",
      statusCode: "404"
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
