import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardIndexComponent} from './dashboard-index/dashboard-index.component';
import {DashboardSettingsComponent} from './dashboard-settings/dashboard-settings.component';
import { DashboardNewUserComponent } from './dashboard-new-user/dashboard-new-user.component';

const appRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DashboardIndexComponent
      },
      {
        path: "settings",
        component: DashboardSettingsComponent
      },
      {
        path: "new-user",
        component: DashboardNewUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
