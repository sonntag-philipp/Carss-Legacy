import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

  /**
   * canActivate function of Auth Guard. Returns bool value depending on the login status and the required value.
   * @param {ActivatedRouteSnapshot} route Snapshot of the invoked route.
   * @param {RouterStateSnapshot} state Snapshot of the router state.
   * @returns {Observable<boolean> | Promise<boolean> | boolean} Returns value if the route can be accessed or not.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return Observable.create(observer => {
      this.fireAuth.authState.subscribe(
        User => {
          if (User !== null) {

            if (User.isAnonymous) {
              this.router.navigate(['']);
              observer.next(false);
            } else {
              observer.next(true);
            }
          } else {
            this.router.navigate(['']);
            observer.next(false);
          }

        },
        error => {
          this.router.navigate(['']);
          observer.next(false);
        }
      );
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return Observable.create(observer => {
      this.fireAuth.authState.subscribe(
        User => {
          if (User !== null) {

            if (User.isAnonymous) {
              this.router.navigate(['']);
              observer.next(false);
            } else {
              observer.next(true);
            }
          } else {
            this.router.navigate(['']);
            observer.next(false);
          }

        },
        error => {
          this.router.navigate(['']);
          observer.next(false);
        }
      );
    });
  }
}
