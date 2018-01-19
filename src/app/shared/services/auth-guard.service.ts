import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  private authenticated: boolean;

  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

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
    return false;
  }
}
