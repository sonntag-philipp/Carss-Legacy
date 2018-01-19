import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from '../../error/error.component';
import {IndexComponent} from '../../index/index.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {SettingsComponent} from '../../dashboard/settings/settings.component';
import {ContactComponent} from '../../info/contact/contact.component';
import {ConditionsComponent} from '../../info/conditions/conditions.component';
import {DataSecurityComponent} from '../../info/data-security/data-security.component';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "info",
    children: [
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "conditions",
        component: ConditionsComponent
      },
      {
        path: "data-security",
        component: DataSecurityComponent
      }
    ]
  },
  {
    path: "dashboard",
    canActivate: [AuthGuardService],
    component: DashboardComponent,
    children: [
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: {
      message: "Seite wurde nicht gefunden!"
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
