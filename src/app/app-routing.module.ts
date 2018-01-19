import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {IndexComponent} from './index/index.component';
import {AuthGuardService} from './auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ImpressumComponent} from './info/impressum/impressum.component';
import {AgbComponent} from './info/agb/agb.component';
import {DatenschutzComponent} from './info/datenschutz/datenschutz.component';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "info",
    children: [
      {
        path: "impressum",
        component: ImpressumComponent
      },
      {
        path: "agb",
        component: AgbComponent
      },
      {
        path: "datenschutz",
        component: DatenschutzComponent
      },
    ]
  },
  {
    path: "dashboard",
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: "**",
    redirectTo: "/not-found"
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: {
      message: "Seite wurde nicht gefunden!"
    }
  }
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
