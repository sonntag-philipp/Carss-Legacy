import {GoogleMapsAPIWrapper} from '@agm/core';
import {Directive, EventEmitter, Input, Output} from '@angular/core';
declare var google: any;


/**
 * Source: http://www.17educations.com/angularjs-2/google-map-directions-display-angular-2/
 */

@Directive({
  selector: '[agmDirections]'
})
export class AgmDirectionsDirective {
  @Input() origin: any;
  @Input() destination: any;
  @Input() waypoints: any;
  @Input() directionsDisplay: any;

  public estimatedDistance = "";
  public estimatedTime = "";

  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

  updateDirections() {
    this.gmapsApi.getNativeMap().then(map => {
      if (this.origin === undefined || this.destination === undefined ) {
        return;
      }

      const directionsService = new google.maps.DirectionsService;
      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: 8,
          strokeOpacity: 0.7,
          strokeColor:  '#00468c'
        }
      });
      this.directionsDisplay.setDirections({routes: []});
      directionsService.route({
        origin: {placeId : this.origin.id },
        destination: {placeId : this.destination.id },
        avoidHighways: true,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
        // travelMode: 'DRIVING'
      }, (resp: any, status: any) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(resp);
          map.setZoom(30);
          // console.log(me.getcomputeDistance (latLngA, latLngB));
          const point = resp.routes[ 0 ].legs[ 0 ];

          this.estimatedTime = point.duration.text;
          this.estimatedDistance = point.distance.text;

          console.log(this.estimatedTime);
          console.log( 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')' );

        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    });

  }

  private getcomputeDistance(latLngA: any , latLngB: any ) {
    return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
  }
}
