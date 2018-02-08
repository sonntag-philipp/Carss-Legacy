import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtrProfilePresenterComponent} from './ftr-profile-presenter/ftr-profile-presenter.component';
import {FtrProfileEditorComponent} from './ftr-profile-editor/ftr-profile-editor.component';
import {FtrProfileComponent} from './ftr-profile/ftr-profile.component';

const appRoutes: Routes = [
  {
    path: "",
    component: FtrProfileComponent,
    children: [
      {
        path: ":id",
        component: FtrProfilePresenterComponent
      },
      {
        path: ":id/edit",
        component: FtrProfileEditorComponent
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
export class FtrProfileRoutingModule { }
