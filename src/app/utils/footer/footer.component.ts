import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from "firebase";

@Component({
  selector: 'carss-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
  }

}
