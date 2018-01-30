import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ftr-info-index',
  templateUrl: './ftr-info-index.component.html',
  styleUrls: ['./ftr-info-index.component.css']
})
export class FtrInfoIndexComponent implements OnInit{

  public initialized = false;
  public authenticated = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  public onBtnGetStarted(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
