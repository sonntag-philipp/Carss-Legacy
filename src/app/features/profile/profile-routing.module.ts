import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfilePresenterComponent} from './profile-presenter/profile-presenter.component';

const appRoutes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    children: [
      {
        path: ":id",
        component: ProfilePresenterComponent
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
export class ProfileRoutingModule { }
