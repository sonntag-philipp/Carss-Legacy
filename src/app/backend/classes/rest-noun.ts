import { RestBase } from './rest-base';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { RestVerb } from './rest-verb';
import { RestResponsable } from '../interfaces/rest-responsable';

export class RestNoun<T> extends RestBase<T> {

  constructor(
    public readonly path: string,
    public readonly http: HttpClient,
    public readonly auth: AngularFireAuth
  ) {
    super(path, http, auth);
  }



  public chainVerb<T>(path: string): RestVerb<T> {
    return new RestVerb<T>(this.path + "/" + path, this.http, this.auth);
  }

  public get(): Observable<T[]> {
    return Observable.create((observer: Observer<T[]>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.get<RestResponsable<T[]>>(this.path, {
            headers: new HttpHeaders({
              "Authorization": result
            })
          }).subscribe(
            next => {

              if (next.status !== 200) {
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
