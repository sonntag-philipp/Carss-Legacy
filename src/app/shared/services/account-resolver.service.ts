import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AccountResolverService implements Resolve<firebase.User> {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<firebase.User> {
    return this.fireAuth.authState;
  }
}
