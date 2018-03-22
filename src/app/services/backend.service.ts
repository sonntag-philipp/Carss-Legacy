import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarssNoun } from '../classes/CarssNoun';
import { GlobalsService } from './globals.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class BackendService {

  constructor(
    private http: HttpClient,
    private globals: GlobalsService,
    private auth: AngularFireAuth
  ) { }

  public noun<T>(path: string): CarssNoun<T> {

    return new CarssNoun<T>(this.globals.rest.address + "/" + path, this.http, this.auth);

  }
}
