import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriveIndexComponent} from './drive-index/drive-index.component';

const appRoutes: Routes = [
  {
    path: "",
    component: DriveIndexComponent
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
export class DriveRoutingModule { }
