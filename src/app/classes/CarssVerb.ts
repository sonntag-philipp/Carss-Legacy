import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarssNoun } from './CarssNoun';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observer } from 'rxjs/Observer';

export class CarssVerb<T> {

  constructor(
    private readonly path: string,
    private readonly http: HttpClient,
    private readonly auth: AngularFireAuth
  ) { }

  public noun<T>(path: string): CarssNoun<T> {
    return new CarssNoun<T>(this.path + "/" + path, this.http, this.auth);
  }

  public get(): Observable<T> {


    return Observable.create((observer: Observer<T>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          console.log(result);

          this.http.get<T>(this.path, {
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


          this.http.get<T>(this.path, {
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

  public delete(): Observable<any> {


    return Observable.create((observer: Observer<any>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.delete(this.path, {
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
