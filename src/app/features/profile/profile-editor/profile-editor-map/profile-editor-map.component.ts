import { Component, Input, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare const google: any;

@Component({
  selector: 'carss-profile-editor-map',
  templateUrl: './profile-editor-map.component.html',
  styleUrls: ['./profile-editor-map.component.css']
})
export class ProfileEditorMapComponent implements OnInit {

  /**
   * The google-uid of the presented profile.
   */
  public uid: string;


  @Input()
  address: string;

  public latitude = 0;
  public longitude = 0;

  constructor(
    private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load();
  }

  mapReady($event: any) {
    this.getLatLong(this.address, $event, null);
  }

  getLatLong(placeid: string, map: any, fn) {
    const placeService = new google.maps.places.PlacesService(map);
    placeService.getDetails({
      placeId: placeid
    }, (result, status) => {
      this.address = result.formatted_address;
      this.latitude = result.geometry.location.lat();
      this.longitude = result.geometry.location.lng();
    });
  }

}
