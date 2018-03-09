import {GoogleMapsAPIWrapper} from '@agm/core';
import { Directive,  Input, Output } from '@angular/core';
declare var google: any;


/**
 * Source: http://www.17educations.com/angularjs-2/google-map-directions-display-angular-2/
 */

@Directive({
  selector: 'misc-agm-directions'
})
export class AgmDirectionsDirective {
  @Input() origin: any ;
  @Input() destination: any;
  @Input() originPlaceId: any;
  @Input() destinationPlaceId: any;
  @Input() waypoints: any;
  @Input() directionsDisplay: any;
  @Input() estimatedTime: any;
  @Input() estimatedDistance: any;

  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

  updateDirections() {
    this.gmapsApi.getNativeMap().then(map => {
      if (!this.originPlaceId || !this.destinationPlaceId ) {
        return;
      }

      const directionsService = new google.maps.DirectionsService;
      const me = this;
      const latLngA = new google.maps.LatLng({lat: this.origin.latitude, lng: this.origin.longitude });
      const latLngB = new google.maps.LatLng({lat: this.destination.latitude, lng: this.destination.longitude });
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
        origin: {placeId : this.originPlaceId },
        destination: {placeId : this.destinationPlaceId },
        avoidHighways: true,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
        // travelMode: 'DRIVING'
      }, function(response: any, status: any) {
        if (status === 'OK') {
          me.directionsDisplay.setDirections(response);
          map.setZoom(30);
          // console.log(me.getcomputeDistance (latLngA, latLngB));
          const point = response.routes[ 0 ].legs[ 0 ];
          me.estimatedTime = point.duration.text ;
          me.estimatedDistance = point.distance.text;
          console.log(me.estimatedTime);
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
