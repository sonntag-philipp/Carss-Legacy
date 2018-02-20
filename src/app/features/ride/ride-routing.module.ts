import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RideIndexComponent} from './ride-index/ride-index.component';
import {RideComponent} from './ride/ride.component';

const appRoutes: Routes = [
  {
    path: "",
    component: RideComponent,
    children: [
      {
        path: "",
        component: RideIndexComponent
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
export class RideRoutingModule { }
