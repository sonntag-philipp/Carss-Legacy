import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from "firebase";
import {AngularFireAuth} from 'angularfire2/auth';
import {ToolbarService} from '../services/toolbar.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  public initialized = false;
  public authenticated = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbarService.hidden = true;
    this.fireAuth.authState.subscribe(
      next => {

        if (next !== null) {
          if (next.isAnonymous) {
            this.initialized = true;
          } else {
            this.router.navigate(['dashboard']);
          }
        } else {
          this.initialized = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.toolbarService.hidden = false;
  }

  public onBtnGetStarted(): void {

    const githubAuthProvier = new firebase.auth.GithubAuthProvider();
    const authProvider = new firebase.auth.GoogleAuthProvider();

    authProvider.addScope("profile");
    authProvider.addScope("email");

    this.fireAuth.auth.signInWithRedirect(authProvider);

  }

}
