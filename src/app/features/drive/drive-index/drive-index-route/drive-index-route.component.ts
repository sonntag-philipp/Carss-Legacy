import {Component, OnInit, ViewChild} from '@angular/core';
import {PlaceModel} from '../../../../shared/models/place.model';
import {AgmDirectionsDirective} from '../../../../misc/directives/agm-directions.directive';
import {MapsAPILoader} from '@agm/core';

declare const google: any;

@Component({
  selector: 'app-drive-index-route',
  templateUrl: './drive-index-route.component.html',
  styleUrls: ['./drive-index-route.component.css']
})
export class DriveIndexRouteComponent implements OnInit {

  @ViewChild(AgmDirectionsDirective)
  public directive: AgmDirectionsDirective;


  constructor(
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
  }

  public destinationChanged(data: PlaceModel) {
    this.directive.destination = data;

    if (this.directive.directionsDisplay === undefined) {
      this.mapsAPILoader.load().then(() => {
        this.directive.directionsDisplay = new google.maps.DirectionsRenderer;
      });
    }

    this.directive.updateDirections();
  }

  public originChanged(data: PlaceModel) {
    this.directive.origin = data;

    if (this.directive.directionsDisplay === undefined) {
      this.mapsAPILoader.load().then(() => {
        this.directive.directionsDisplay = new google.maps.DirectionsRenderer;
      });
    }

    this.directive.updateDirections();
  }

}
