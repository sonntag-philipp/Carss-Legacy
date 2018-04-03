import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RideIndexComponent } from './ride-index/ride-index.component';
import { RideComponent } from './ride/ride.component';
import { RideSearchComponent } from './ride-search/ride-search.component';
import { RidePresenterComponent } from './ride-presenter/ride-presenter.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RideComponent,
    children: [
      {
        path: '',
        component: RideIndexComponent
      },
      {
        path: 'search/:query',
        component: RideSearchComponent
      },
      {
        path: ':id',
        component: RidePresenterComponent
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
export class RideRoutingModule {
}
