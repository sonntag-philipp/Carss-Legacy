import { Injectable } from '@angular/core';
import { GlobalsService } from '../services/globals.service';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { RestNoun } from './classes/rest-noun';

@Injectable()
export class BackendService {

  constructor(
    private http: HttpClient,
    private globals: GlobalsService,
    private auth: AngularFireAuth
  ) { }

  public chainNoun<T>(path: string): RestNoun<T> {
    return new RestNoun<T>(this.globals.rest.address + "/" + path, this.http, this.auth);
  }
}
