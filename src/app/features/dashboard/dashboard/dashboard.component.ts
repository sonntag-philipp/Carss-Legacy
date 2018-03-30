import { Component, OnInit } from '@angular/core';
import { PlaceModel } from '../../../models/place.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'carss-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public env = environment;

  public place: PlaceModel = {
    lat: 4,
    lng: 4
  };

  constructor() {
  }

  ngOnInit() {
  }

}
