import { Component } from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-ftr-info-index',
  templateUrl: './ftr-info-index.component.html',
  styleUrls: ['./ftr-info-index.component.css']
})
export class FtrInfoIndexComponent {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  public onBtnGetStarted(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
