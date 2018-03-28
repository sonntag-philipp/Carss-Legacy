import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../../services/toolbar.service';
import { PlaceModel } from '../../../models/place.model';

@Component({
  selector: 'carss-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public place: PlaceModel = {
    lat: 4,
    lng: 4
  };

  constructor() {
  }

  ngOnInit() {
  }

}
