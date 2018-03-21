import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalsService } from './globals.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
    private globals: GlobalsService,
    private auth: AngularFireAuth
  ) { }

  public getUser(userID: string): Observable<UserModel> {
    return Observable.create(observer => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {
          this.http.get(this.globals.rest.address + "/users/" + userID, {
            headers: new HttpHeaders({
              "Authorization": result
            })
          }).subscribe(
            next => {
              observer.next(next);
              observer.complete();
            },
            err => {
              console.error(err);
            }
          );
        }
      );

    });
  }

  public putUser(userID: number) {

  }

  public postUser(userID: number) {

  }

  public deleteUser(userID: number) {

  }
}
