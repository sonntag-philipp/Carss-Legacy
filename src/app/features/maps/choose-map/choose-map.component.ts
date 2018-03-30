import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MapsService } from '../../../services/maps.service';
import { PlaceModel } from '../../../models/place.model';
import { AgmMap, LatLngLiteral } from '@agm/core';

@Component({
  selector: 'carss-choose-map',
  templateUrl: './choose-map.component.html',
  styleUrls: ['./choose-map.component.css']
})
export class ChooseMapComponent implements OnInit {

  @Input() disabled: boolean;

  public formattedAddress: string;

  public initialized = false;
  public address: any = {
    formattedAddress: ""
  };

  @Input() placeId: string;
  @Output() placeIdChange: EventEmitter<string> = new EventEmitter<string>();



  private _marker: LatLngLiteral;
  public get marker(): LatLngLiteral {
    return this._marker;
  }

  @ViewChild("map")
  private map: AgmMap;


  constructor(
    private service: MapsService
  ) { }

  ngOnInit() {
    const sub = this.service.getCoordinates(this.placeId).subscribe(
      next => {
        this._marker = {
          lat: next.lat,
          lng: next.lng
        };
        if (this.disabled) {
          const sub2 = this.service.getComponents(this.placeId).subscribe(
            next => {
              this.formattedAddress = next.formattedAddress;
              this.initialized = true;
              sub2.unsubscribe();
            }
          );
        }else {
          this.initialized = true;
          sub.unsubscribe();
        }
      }
    );
  }

  /**
   * Gets emitted when the place input text is changed.
   * @param {PlaceModel} data PlaceModel that the text returned.
   */
  public inputChanged(data: string) {
    const sub = this.service.getCoordinates(data).subscribe(
      next => {
        this._marker.lat = next.lat;
        this._marker.lng = next.lng;
        this.map.triggerResize(true);
        sub.unsubscribe();
      }
    );

    const sub2 = this.service.getCoordinates(data).subscribe(
      next => {
        this._marker.lat = next.lat;
        this._marker.lng = next.lng;
        this.placeIdChange.emit(data);
        sub2.unsubscribe();
      }
    );
  }

  /**
   * Gets emitted when the drag of a marker is stopped.
   * @param data Coordinates of the marker.
   */
  public dragEnd(data: any) {
    this._marker.lat = data.coords.lat;
    this._marker.lng = data.coords.lng;

    const sub = this.service.getId(data.coords.lat, data.coords.lng).subscribe(
      next => {
        this.placeIdChange.emit(next);
        this.placeId = next;
        sub.unsubscribe();

        const sub2 = this.service.getComponents(this.placeId).subscribe(
          next => {
            this.address = next;
            sub2.unsubscribe();
          }
        );

      }
    );
  }

}
