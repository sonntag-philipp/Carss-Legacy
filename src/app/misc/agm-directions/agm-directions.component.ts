import {Component, Input, OnInit} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
declare var google: any;

/**
 * Used from GitHub discussion: https://github.com/SebastianM/angular-google-maps/issues/495
 */

@Component({
  selector: 'agm-directions',
  templateUrl: './agm-directions.component.html',
  styleUrls: ['./agm-directions.component.css']
})
export class AgmDirectionsComponent implements OnInit {
  @Input() origin;
  @Input() destination;

  constructor(
    private mapsApi: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
    this.mapsApi.getNativeMap().then(
      map => {
        const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(map);
        directionsService.route({
          origin: {latitude: this.origin.latitude, longitude: this.origin.longitude},
          destination: {latitude: this.destination.latitude, longitude: this.destination.longitude},
          waypoints: [],
          optimizeWaypoints: true,
          travelMode: "DRIVING"
        }, (response, status) => {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
    );
  }

}
