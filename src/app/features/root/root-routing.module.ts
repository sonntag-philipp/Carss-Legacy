import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { RootIndexComponent } from './root-index/root-index.component';
import { RootNewUserComponent } from './root-new-user/root-new-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: RootIndexComponent
      },
      {
        path: 'new-user',
        component: RootNewUserComponent
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
export class RootRoutingModule {
}
