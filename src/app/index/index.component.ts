import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public authenticated = false;
  public initialized = false;

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  login(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
  }

  ngOnInit() {

    // This looks strange, but there is hardly a way to find to make this look better. Thanks to everything being async.
    this.fireAuth.authState.subscribe(
      User => {
        if (User !== null) {

          if (User.isAnonymous) {
            this.initialized = true;
          } else {
            this.initialized = true;
            this.authenticated = true;
          }
        } else {
          this.initialized = true;
        }

      },
      error => {
        this.initialized = true;
      }
    );
  }

}
