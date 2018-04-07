import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../backend/backend.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SessionService {

  public get user(): UserModel {
    return this._user;
  }
  private _user: UserModel;

  constructor(
    private backend: BackendService,
    private auth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
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

  public logout(): void {
    this.auth.auth.signOut().then(
      () => {
        this.router.navigate(["/"]);
      }
    ).catch(
      () => {
        this.snackBar.open("Du konntest nicht abgemeldet werden...", "Okay", {duration: 2500});
      }
    );
  }
}
