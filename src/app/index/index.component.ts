import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToolbarService } from '../services/toolbar.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  public initialized = false;
  public authenticated = false;

  private authSubscribtion: any;

  constructor(private fireAuth: AngularFireAuth,
              private router: Router,
              private toolbarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.toolbarService.hidden = true;
    this.authSubscribtion = this.fireAuth.authState.subscribe(
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
    this.authSubscribtion.unsubscribe();
  }
}
