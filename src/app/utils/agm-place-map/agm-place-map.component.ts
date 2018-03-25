import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PlaceModel } from '../../models/place.model';
import { AgmMap } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { MapsService } from '../../services/maps.service';

declare const google: any;

@Component({
  selector: 'agm-place-map',
  templateUrl: './agm-place-map.component.html',
  styleUrls: ['./agm-place-map.component.css']
})
export class AgmPlaceMapComponent implements OnInit {

  /**
   * Initial values to set the map location to.
   */
  @Input() longitude: number;
  @Input() latitude: number;

  /**
   * EvenEmitters that get emitted when the address components change or the place changed.
   */
  @Output() markerChange: EventEmitter<PlaceModel> = new EventEmitter<PlaceModel>();

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

  ngOnInit() { }

  /**
   * Gets emitted when the place input text is changed.
   * @param {PlaceModel} data PlaceModel that the text returned.
   */
  public inputChanged(data: PlaceModel) {
    this._marker = data;
    this.map.triggerResize(true);

    this.mapsService.getComponents(this.marker).subscribe(
      next => {
        this._marker = next;
        this.markerChange.emit(this._marker);
      }
    );
  }

  /**
   * Gets emitted when the drag of a marker is stopped.
   * @param data Coordinates of the marker.
   */
  public dragEnd(data: any) {
    this.latitude = data.coords.lat;
    this.longitude = data.coords.lng;

    this.mapsService.getId(this.latitude, this.longitude).subscribe(
      next => {
        this._marker.id = next;
        this.mapsService.getComponents(this._marker).subscribe(
          next => {
            this._marker = next;
            this.markerChange.emit(this._marker);
          }
        );

      }
    );
  }
}
