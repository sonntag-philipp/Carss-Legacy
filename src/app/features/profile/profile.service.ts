import {Injectable} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {TagModel} from '../../models/tag.model';
import {CarModel} from '../../models/car.model';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../services/globals';

@Injectable()
export class ProfileService {

  get profile(): ProfileTagsModel {
    return this._profile;
  }
  private _profile: ProfileTagsModel = {
    surname: "Sonntag",
    name: "Philipp",
    description: "Hallo, I bin 1 Programmierer",
    tags: [
      {content: "Admin", id: 1, name: "admin", profile_id: "kjnawd", creator: "Philipp Sonntag", timestamp: "17.03.2018 - 01:33"},
      {content: "17 Jahre", id: 1, name: "17 jahre", profile_id: "kjnawd", creator: "Philipp Sonntag", timestamp: "17.03.2018 - 01:33"}
    ],
    place_id: "ChIJ85ar0fmxt0cRXSAoYYXA3fs",
    id: "nega",
    rating: 5,
    image_url: "https://i.imgur.com/m7olqG8.png"
  };

  get cars(): CarTagsModel[] {
    return this._cars;
  }
  private _cars: CarTagsModel[] = [
    {
      name: "Big Boom Car",
      description: "Ist ein gutes Auto",
      id: 1,
      profile_id: "odawnawd",
      image_url: "https://i.imgur.com/tivk0vD.png",
      tags: [
        {content: "Admin", id: 1, name: "admin", profile_id: "kjnawd", creator: "Philipp Sonntag", timestamp: "17.03.2018 - 01:33"}
      ]
    },
    {
      name: "Big Boom Car",
      description: "Ist ein gutes Auto",
      id: 1,
      profile_id: "odawnawd",
      image_url: "https://i.imgur.com/tivk0vD.png",
      tags: [
        {content: "Admin", id: 1, name: "admin", profile_id: "kjnawd", creator: "Philipp Sonntag", timestamp: "17.03.2018 - 01:33"}
      ]
    }
  ];


  /**
   * Loads the profile data into the profile object of the profile service.
   * @param {string} uid The Google user id of the profile to be loaded.
   * @returns {boolean} Returns false if the profile could not be loaded.
   */
  public loadProfile(uid: string): boolean {
    if (this.profile.id === uid) {
      return true;
    }
  }

  /**
   * Uploads the profile data to the database and validates it there.
   * @returns {boolean} Returns false if the profile could not be saved.
   */
  public saveProfile(): boolean {
    if (this.profile === undefined) {
      throw new Error("Profile must not be undefined!");
    }

    return false;
  }










  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }
}


interface ProfileTagsModel extends ProfileModel {
  tags: TagModel[];
}

interface CarTagsModel extends CarModel {
  tags: TagModel[];
}
