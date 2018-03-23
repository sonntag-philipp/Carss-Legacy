import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToolbarService } from '../services/toolbar.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from "firebase";
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'carss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private toolbarService: ToolbarService,
    private auth: AngularFireAuth,
    private router: Router,
    private backend: BackendService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.toolbarService.hidden = true;
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
      }
    );
  }

  public btnFacebook() {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  ngOnDestroy(): void {
    this.toolbarService.hidden = false;
  }

  private afterLogin(result: any) {

    if (result.additionalUserInfo.isNewUser) {
      this.backend.noun("users").post({}).subscribe(
        next => {
          if (next.id === this.auth.auth.currentUser.uid) {
            this.router.navigate(["/dashboard/new-user"]);
          } else {
            this.snackBar.open("Hat nicht funktioniert. Kannst du das vielleicht den Admins sagen?", "Okay");
          }
        }
      );

    }else {
      this.router.navigate(['/dashboard']);
    }
  }

}
