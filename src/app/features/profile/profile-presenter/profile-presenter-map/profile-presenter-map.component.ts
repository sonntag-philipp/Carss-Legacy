import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../profile.service';
import {ActivatedRoute} from '@angular/router';
import {MapsAPILoader} from '@agm/core';

declare const google: any;

@Component({
  selector: 'app-profile-presenter-map',
  templateUrl: './profile-presenter-map.component.html',
  styleUrls: ['./profile-presenter-map.component.css']
})
export class ProfilePresenterMapComponent implements OnInit {

  /**
   * The google-uid of the presented profile.
   */
  public uid: string;


  public latitude = 0;
  public longitude = 0;
  public address = "";

  constructor(
    public profileService: ProfileService,
    private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load();
  }

  mapReady($event: any) {
    // here $event will be of type google.maps.Map
    // and you can put your logic here to get lat lng for marker. I have just put a sample code. You can refactor it the way you want.
    this.getLatLong(this.profileService.profile.place_id, $event, null);
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
