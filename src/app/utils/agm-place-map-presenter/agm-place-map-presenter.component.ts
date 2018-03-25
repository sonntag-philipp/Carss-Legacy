import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PlaceModel } from '../../models/place.model';
import { MapsService } from '../../services/maps.service';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'agm-place-map-presenter',
  templateUrl: './agm-place-map-presenter.component.html',
  styleUrls: ['./agm-place-map-presenter.component.css']
})
export class AgmPlaceMapPresenterComponent implements OnInit {

  /**
   * Initial values to set the map location to.
   */
  @Input() longitude: number;
  @Input() latitude: number;

  @Input() placeId = "";

  public initialized = false;

  private _marker: PlaceModel = {
    lat: this.latitude,
    lng: this.longitude
  };
  public get marker(): PlaceModel {
    return this._marker;
  }

  @ViewChild("map")
  private map: AgmMap;

  constructor(
    private mapsService: MapsService
  ) { }

  ngOnInit() {
    if (this.placeId === "") {
      console.log("Feddich 1");

      this.mapsService.getId(this.latitude, this.longitude).subscribe(
        next => {
          this._marker.id = next;
          this.mapsService.getComponents(this._marker).subscribe(
            next => {
              this._marker = next;
              this.latitude = next.lat;
              this.longitude = next.lng;
              this.map.triggerResize(true);
            }
          );

        }
      );
    }else {
      this._marker.id = this.placeId;
      this.mapsService.getCoordinates(this._marker.id).subscribe(
        next => {
          this._marker = next;
          this.latitude = next.lat;
          this.longitude = next.lng;
          console.log("Feddich");

          this.map.triggerResize(true);
        }
      );
    }
  }

}
