import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from '../../error/error.component';
import {ContactComponent} from '../../info/contact/contact.component';
import {ConditionsComponent} from '../../info/conditions/conditions.component';
import {DataSecurityComponent} from '../../info/data-security/data-security.component';
import {IndexComponent} from '../../index/index.component';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "info",
    children: [
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "conditions",
        component: ConditionsComponent
      },
      {
        path: "data-security",
        component: DataSecurityComponent
      }
    ]
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: {
      message: "Seite wurde nicht gefunden!"
    }
  },
  {
    path: "**",
    redirectTo: "/not-found"
  },
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
