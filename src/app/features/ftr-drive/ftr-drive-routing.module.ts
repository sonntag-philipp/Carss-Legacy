import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtrDriveIndexComponent} from './ftr-drive-index/ftr-drive-index.component';

const appRoutes: Routes = [
  {
    path: "",
    component: FtrDriveIndexComponent
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
export class FtrDriveRoutingModule { }
