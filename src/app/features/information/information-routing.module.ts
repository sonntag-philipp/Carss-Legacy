import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { InformationConditionsComponent } from './information-conditions/information-conditions.component';
import { InformationContactComponent } from './information-contact/information-contact.component';
import { InformationSecurityComponent } from './information-security/information-security.component';
import { InformationFaqComponent } from './information-faq/information-faq.component';
import { InformationAboutComponent } from './information-about/information-about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: InformationComponent,
    children: [
      {
        path: 'conditions',
        component: InformationConditionsComponent
      },
      {
        path: 'about',
        component: InformationAboutComponent
      },
      {
        path: 'contact',
        component: InformationContactComponent
      },
      {
        path: 'security',
        component: InformationSecurityComponent
      },
      {
        path: 'faq',
        component: InformationFaqComponent
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
export class InformationRoutingModule {
}
