import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'carss-dashboard-index-charge-map',
  templateUrl: './dashboard-index-charge-map.component.html',
  styleUrls: ['./dashboard-index-charge-map.component.css']
})
export class DashboardIndexChargeMapComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

}
