import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from './globals.service';
import { ProfileModel } from '../models/profile.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfilesService {

  private profilesCache: ProfileModel[] = [];

  constructor(
    private http: HttpClient,
    private globals: GlobalsService
  ) { }

  public getProfile(profileID: number): Observable<ProfileModel> {
    return Observable.create(observer => {

      // TODO: Process hash of request to enable caching of the values.


      this.http.get(this.globals.rest.address + "/profiles/" + profileID).subscribe(
        next => {
          this.profilesCache.push(next[0]);
          observer.next(next);
          observer.complete();
        },
        err => {
          console.error(err);
        }
      );
    });
  }

  public putProfile(profileID: number) {

  }

  public postProfile(profileID: number) {

  }

  public deleteProfile(profileID: number) {

  }
}
