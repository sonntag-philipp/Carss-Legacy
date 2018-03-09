import {PlaceModel} from './place.model';
import {CarModel} from './car.model';

export interface RideModel {

  // The origin and destination of the ride.
  origin: PlaceModel;
  destination: PlaceModel;

  // Description of the ride.
  description: string;

  // Start-timestamp of the ride.
  timestamp: string;

  // Car defined in the new ride editor.
  car: CarModel;
}
