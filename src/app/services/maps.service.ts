import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlaceModel } from '../models/place.model';
import { Observer } from 'rxjs/Observer';
import { MapsAPILoader } from '@agm/core';

declare const google: any;

@Injectable()
export class MapsService {

  constructor(
    private mapsApiLoader: MapsAPILoader
  ) { }

  /**
   * Filters the google maps place id out of coordinates.
   * @param {number} lat Latitude of the coordinate.
   * @param {number} lng Longitude of the coordinate.
   * @returns {Observable<string>} Observable of the filtered place id.
   */
  public getId(lat: number, lng: number): Observable<string> {
    return Observable.create((observer: Observer<string>) => {

      this.mapsApiLoader.load().then(
        () => {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            location: {
              lat: lat,
              lng: lng
            }
          }, (results, status) => {
            observer.next(results[0].place_id);
            observer.complete();
          });
        }
      ).catch(
        err => {
          console.error("Error while loading Google Maps API!");
        }
      );
    });
  }

  /**
   * Returns a PlaceModel with the filtered coordinates.
   * @param {string} id
   * @returns {any}
   */
  public getCoordinates(id: string) {
    return Observable.create((observer: Observer<PlaceModel>) => {

      this.mapsApiLoader.load().then(
        () => {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            placeId: id
          }, (results, status) => {
            observer.next({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
            observer.complete();
          });
        }
      ).catch(
        err => {
          observer.error(err);
          observer.complete();
        }
      );
    });
  }

  /**
   * Returns a new PlaceModel with the formattedAddress and addressComponents set.
   * @param {PlaceModel} place
   * @returns {Observable<PlaceModel>}
   */
  public getComponents(placeId: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {

      this.mapsApiLoader.load().then(
        () => {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            placeId: placeId
          }, (results, status) => {
            const returnVals: any = {};

            const components = [];

            // Filter the results for the city and street
            for (const item of results[0].address_components) {
              if (item.types.indexOf("locality") > -1) {
                components.push(item.long_name);
              }
              if (item.types.indexOf("route") > -1) {
                components.push(item.long_name);
              }
            }

            returnVals.formattedAddress = results[0].formatted_address;
            returnVals.addressComponents = components;

            observer.next(returnVals);
            observer.complete();
          });
        }
      ).catch(
        err => {
          observer.error(err);
          observer.complete();
        }
      );
    });
  }
}
