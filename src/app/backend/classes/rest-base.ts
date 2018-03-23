import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { RestResponsable } from '../interfaces/rest-responsable';

export class RestBase<T> {

  constructor(
    public readonly path: string,
    public readonly http: HttpClient,
    public readonly auth: AngularFireAuth
  ) { }

  /**
   * Puts an item to to the chained path.
   * @param {T} item Item that has to be put.
   * @returns {Observable<RestResponsable<T>>} Observable of an RestResponse<T>.
   */
  public put<T>(item: T): Observable<RestResponsable<T>> {
    return Observable.create((observer: Observer<RestResponsable<T>>) => {

      // Get ID Token of the user.
      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.put<RestResponsable<T>>(this.path, item, {
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

  /**
   * Posts a new item to the chained path.
   * @param item Item that has to be posted.
   * @returns {Observable<RestResponsable<T>>} Observable of an RestResponse<T>.
   */
  public post<T>(item: T): Observable<RestResponsable<T>> {

    return Observable.create((observer: Observer<RestResponsable<T>>) => {

      this.auth.auth.currentUser.getIdToken().then(
        result => {

          this.http.post<RestResponsable<T>>(this.path, item, {
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
