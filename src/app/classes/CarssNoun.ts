import { CarssVerb } from './CarssVerb';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observer } from 'rxjs/Observer';

export class CarssNoun<T> {


  constructor(
    private readonly path: string,
    private readonly http: HttpClient,
    private readonly auth: AngularFireAuth
  ) { }

  public verb<T>(path: string): CarssVerb<T> {
    return new CarssVerb<T>(this.path + "/" + path, this.http, this.auth);
  }

  // TODO: Extend base class, I'm not doing this already because of different return types.

  public get(): Observable<T[]> {


    return Observable.create((observer: Observer<T[]>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.get<T[]>(this.path, {
            headers: new HttpHeaders({
              "Authorization": result
            })
          }).subscribe(
            next => {
              observer.next(next);
              observer.complete();
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

  public post(item: any): Observable<any> {

    return Observable.create((observer: Observer<any>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.post(this.path, item, {
            headers: new HttpHeaders({
              "Authorization": result
            })
          }).subscribe(
            next => {
              observer.next(next);
              observer.complete();
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

  public put(item: T): Observable<any> {

    return Observable.create((observer: Observer<any>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.put(this.path, item, {
            headers: new HttpHeaders({
              "Authorization": result
            })
          }).subscribe(
            next => {
              observer.next(next);
              observer.complete();
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
