import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';

const appRoutes: Routes = [
  {
    path: "**",
    redirectTo: "/not-found"
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: {
      message: "Seite wurde nicht gefunden!"
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
