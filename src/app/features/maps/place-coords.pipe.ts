import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeCoords'
})
export class PlaceCoordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
