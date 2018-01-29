import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtrInfoIndexComponent} from './ftr-info-index/ftr-info-index.component';
import {FtrInfoComponent} from './ftr-info/ftr-info.component';
import {FtrInfoConditionsComponent} from './ftr-info-conditions/ftr-info-conditions.component';
import {FtrInfoContactComponent} from './ftr-info-contact/ftr-info-contact.component';
import {FtrInfoDataSecurityComponent} from './ftr-info-data-security/ftr-info-data-security.component';

const appRoutes: Routes = [
  {
    path: "",
    component: FtrInfoComponent,
    children: [
      {
        path: "",
        component: FtrInfoIndexComponent
      },
      {
        path: "conditions",
        component: FtrInfoConditionsComponent
      },
      {
        path: "contact",
        component: FtrInfoContactComponent
      },
      {
        path: "data-security",
        component: FtrInfoDataSecurityComponent
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
