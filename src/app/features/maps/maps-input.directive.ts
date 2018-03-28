import { AfterContentInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { MapsAPILoader } from '@agm/core';


declare const google: any;

@Directive({
  selector: '[carssMapsInput]'
})
export class MapsInputDirective implements AfterContentInit{

  @Output() placeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private mapsApiLoader: MapsAPILoader,
    private parentElementRef: ElementRef
  ) { }

  public ngAfterContentInit(): void {


    this.mapsApiLoader.load().then(() => {
      const ac = new google.maps.places.Autocomplete(this.parentElementRef.nativeElement, {
        types: ["geocode", "establishment"]
      });

      ac.addListener("place_changed", () => {
        const place = ac.getPlace();

        if (place.geometry !== undefined) {

          this.placeChange.emit(place.place_id);
        }
      });
    });

  }
}
