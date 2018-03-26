import { RestBase } from './rest-base';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AngularFireAuth } from 'angularfire2/auth';
import { RestNoun } from './rest-noun';
import { RestResponsable } from '../interfaces/rest-responsable';

export class RestVerb<T> extends RestBase<T> {

  constructor(
    public readonly path: string,
    public readonly http: HttpClient,
    public readonly auth: AngularFireAuth
  ) {
    super(path, http, auth);
  }

  public chainNoun<T>(path: string): RestNoun<T> {
    return new RestNoun<T>(this.path + "/" + path, this.http, this.auth);
  }

  public get(): Observable<T> {
    return Observable.create((observer: Observer<T>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          console.log(result);

          this.http.get<RestResponsable<T>>(this.path, {
            headers: new HttpHeaders({
              "Authorization": result
            })
          }).subscribe(
            next => {

              if (next.status !== 200) {
                console.error("Error-Statuscode: " + next.status);
                console.error("Error-Message: " + next.msg);
                observer.error(next);
              } else {
                observer.next(next.body);
                observer.complete();
              }
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
        }
      );
    });
  }
}
