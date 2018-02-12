import {CharacteristicsModel} from './characteristics.model';
import {CarModel} from './car.model';

export class ProfileModel {

  public car: CarModel;
  public characteristics: CharacteristicsModel;
  public form: string;
  public name: string;
  public school: string;

}
