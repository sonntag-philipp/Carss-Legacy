import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriveIndexComponent} from './drive-index/drive-index.component';
import {DriveComponent} from './drive/drive.component';


const appRoutes: Routes = [
  {
    path: "",
    component: DriveComponent,
    children: [
      {
        path: "",
        component: DriveIndexComponent
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
export class DriveRoutingModule { }
