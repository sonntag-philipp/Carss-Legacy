import {Component, OnDestroy, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {ToolbarService} from '../../../shared/services/toolbar.service';

@Component({
  selector: 'app-information-index',
  templateUrl: './information-index.component.html',
  styleUrls: ['./information-index.component.css']
})
export class InformationIndexComponent implements OnInit, OnDestroy{

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
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
