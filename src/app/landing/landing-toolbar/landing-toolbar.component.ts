import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.css']
})
export class LandingToolbarComponent implements OnInit {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  public onBtnGetStarted(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
