import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtrRideIndexComponent} from './ftr-ride-index/ftr-ride-index.component';

const appRoutes: Routes = [
  {
    path: "",
    component: FtrRideIndexComponent
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
export class FtrRideRoutingModule { }
