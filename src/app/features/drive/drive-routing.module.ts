import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriveIndexComponent} from './drive-index/drive-index.component';
import {DriveComponent} from './drive/drive.component';
import {DriveEditorComponent} from './drive-editor/drive-editor.component';
import {DriveNewComponent} from './drive-new/drive-new.component';


const appRoutes: Routes = [
  {
    path: "",
    component: DriveComponent,
    children: [
      {
        path: "new",
        component: DriveNewComponent
      },
      {
        path: "view/:id",
        component: DriveIndexComponent
      },
      {
        path: "edit/:id",
        component: DriveEditorComponent
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
export class DriveRoutingModule { }
