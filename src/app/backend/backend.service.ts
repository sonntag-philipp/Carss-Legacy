import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { RestNoun } from './classes/rest-noun';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth
  ) { }

  public chainNoun<T>(path: string): RestNoun<T> {
    return new RestNoun<T>(environment.carssStore.address + "/" + path, this.http, this.auth);
  }
}
