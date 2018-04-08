import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../../../backend/backend.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'carss-root-index',
  templateUrl: './root-index.component.html',
  styleUrls: ['./root-index.component.css']
})
export class RootIndexComponent implements OnInit {

  public initialized = false;
  public loggedin = false;

  constructor(
    private auth: AngularFireAuth,
    private backend: BackendService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    const subscribtion = this.auth.authState.subscribe(
      next => {

        if (next === null) {
          this.initialized = true;
        }else {
          this.loggedin = true;
          subscribtion.unsubscribe();
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

  public btnLogin(mail: string, password: string) {
    this.auth.auth.signInWithEmailAndPassword(mail, password).then(
      user => {
        console.log(user);
      }
    )
      .catch(
        error => {
          this.snackBar.open(error.message, "Okay", {duration: 3500});
        }
      );
  }

  public btnRegister(mail: string, password: string) {
    this.auth.auth.createUserWithEmailAndPassword(mail, password).then(
      user => {
        console.log(user);
      }
    )
    .catch(
      error => {
        this.snackBar.open(error.message, "Okay", {duration: 3500});
      }
    );
  }

  public btnGoogle() {
    const authProvider = new firebase.auth.GoogleAuthProvider();

    authProvider.addScope("profile");
    authProvider.addScope("email");

    this.auth.auth.signInWithPopup(authProvider).then(
      result => {
        // This has to be done so this doesn't get changed.
        this.afterLogin(result);
      }
    ).catch(
      err => {
        console.error(err);
        this.snackBar.open("Da lief Etwas schief, versuch's nochmal.", "Okay", {duration: 3500});
      }
    );
  }

  public btnGitHub() {
    this.auth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(
      result => {
        // This has to be done so this doesn't get changed.
        this.afterLogin(result);
      }
    ).catch(
      err => {
        console.error(err);
        this.snackBar.open("Da lief Etwas schief, versuch's nochmal.", "Okay", {duration: 3500});
      }
    );
  }

  public btnFacebook() {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      result => {
        // This has to be done so this doesn't get changed.
        this.afterLogin(result);
      }
    ).catch(
      err => {
        console.error(err);
        this.snackBar.open("Da lief Etwas schief, versuch's nochmal.", "Okay", {duration: 3500});
      }
    );
  }

  private afterLogin(result: any) {
    if (result.additionalUserInfo.isNewUser) {
      this.router.navigate(['/new-user']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

}
