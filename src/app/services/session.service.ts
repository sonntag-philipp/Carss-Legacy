import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../backend/backend.service';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  public get initialized(): boolean {
    return this._initialized;
  }
  private _initialized = false;

  public get failed(): boolean {
    return this._failed;
  }
  private _failed = false;

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
          this._initialized = true;
          this.router.navigate(["/"]);
          return;
        }

        this.backend.chainNoun("users").chainVerb<UserModel>(next.uid).get().subscribe(
          next => {
            this._user = next;
            this._initialized = true;
          },
          err => {
            this._failed = true;
          }
        );
      },
      err => {
        this._failed = true;
      }
    );


  }
}
