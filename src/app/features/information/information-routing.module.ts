import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InformationComponent} from './information/information.component';
import {InformationIndexComponent} from './information-index/information-index.component';
import {InformationConditionsComponent} from './information-conditions/information-conditions.component';
import {InformationContactComponent} from './information-contact/information-contact.component';
import {InformationSecurityComponent} from './information-security/information-security.component';

const appRoutes: Routes = [
  {
    path: "",
    component: InformationComponent,
    children: [
      {
        path: "",
        component: InformationIndexComponent
      },
      {
        path: "conditions",
        component: InformationConditionsComponent
      },
      {
        path: "contact",
        component: InformationContactComponent
      },
      {
        path: "security",
        component: InformationSecurityComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/not-found"
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FtrInformationRoutingModule { }
