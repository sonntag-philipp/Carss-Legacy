import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../backend/backend.service';

@Injectable()
export class UserSessionService {

  public get initialized(): boolean {
    return this._initialized;
  }
  private _initialized = false;

  public get user(): UserModel {
    return this._user;
  }
  private _user: UserModel;

  constructor(
    private backend: BackendService,
    private auth: AngularFireAuth
  ) {
    this.backend.chainNoun("users").chainVerb<UserModel>(this.auth.auth.currentUser.uid).get().subscribe(
      next => {
        this._user = next;
        this._initialized = true;
      }
    );
  }
}
