import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../backend/backend.service';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  public get user(): UserModel {
    return this._user;
  }
  private _user: UserModel;

  constructor(
    private backend: BackendService,
    private auth: AngularFireAuth,
    private router: Router
  ) {
    this.auth.authState.subscribe(
      next => {

        if (next === null) {
          this.router.navigate(["/"]);
          return;
        }

        this.backend.chainNoun("users").chainVerb<UserModel>(next.uid).get().subscribe(
          next => {
            this._user = next;
          },
          err => {
            console.error(err);
          }
        );
      },
      err => {
        console.error(err);
      }
    );


  }
}
