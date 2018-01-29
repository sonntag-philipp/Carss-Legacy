import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtrDashIndexComponent} from './ftr-dash-index/ftr-dash-index.component';
import {FtrDashComponent} from './ftr-dash/ftr-dash.component';

const appRoutes: Routes = [
  {
    path: "",
    component: FtrDashComponent,
    children: [
      {
        path: "",
        component: FtrDashIndexComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/not-found"
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
export class FtrDashboardRoutingModule { }
