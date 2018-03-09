import {Injectable} from '@angular/core';
import {ProfileModel} from '../../shared/models/profile.model';

@Injectable()
export class ProfileService {

  public profile: ProfileModel;

  constructor() { }
}
