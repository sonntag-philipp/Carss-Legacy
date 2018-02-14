import {AngularFirestoreDocument} from 'angularfire2/firestore';
import {RideModel} from './ride.model';

export class UserModel {

  public registerDate: string;
  public rides: AngularFirestoreDocument<RideModel>[];
  public securityLevel: number;
  public systemChips: string[];
  public userChips: string[];

}
