import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  public onBtnLoginGoogle(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  public onBtnLoginFacebook(): void {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

}
