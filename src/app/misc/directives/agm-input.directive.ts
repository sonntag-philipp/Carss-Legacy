import { Directive, ElementRef, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {PlaceModel} from '../../shared/models/place.model';

declare const google: any;

@Directive({
  selector: '[agmInput]'
})
export class AgmInputDirective implements AfterContentInit {

  @Output()
  public placeChanged: EventEmitter<PlaceModel> = new EventEmitter<PlaceModel>();

  constructor(
    private mapsApiLoader: MapsAPILoader,
    private parentElementRef: ElementRef
  ) { }

  public ngAfterContentInit(): void {

    this.mapsApiLoader.load().then(() => {
      const ac = new google.maps.places.Autocomplete(this.parentElementRef.nativeElement, {
        types: ["address"]
      });

      ac.addListener("place_changed", () => {
        const place = ac.getPlace();

        if (place.geometry !== undefined) {

          this.placeChanged.emit({
            id: place.place_id,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          });
        }
      });
    });

  }
}
