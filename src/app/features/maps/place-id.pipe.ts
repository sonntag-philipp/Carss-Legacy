import { Pipe, PipeTransform } from '@angular/core';
import { MapsService } from '../../services/maps.service';

@Pipe({
  name: 'placeId'
})
export class PlaceIdPipe implements PipeTransform {

  constructor(
    private mapsService: MapsService
  ) { }

  transform(value: any, args?: any): any {
    this.mapsService.getId(value.lat, value.lng).subscribe(
      next => {
        return next;
      },
      err => {
        return err;
      }
    );
  }

}
