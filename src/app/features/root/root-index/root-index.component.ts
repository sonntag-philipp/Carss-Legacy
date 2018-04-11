import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../../../backend/backend.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'carss-root-index',
  templateUrl: './root-index.component.html',
  styleUrls: ['./root-index.component.css']
})
export class RootIndexComponent implements OnInit {

  public initialized = false;
  public loggedin = false;

  public env = environment;

  constructor(
    private auth: AngularFireAuth,
    private backend: BackendService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    const subscribtion = this.auth.authState.subscribe(
      next => {

        if (next === null) {
          this.initialized = true;
        }else {
          this.loggedin = true;
          subscribtion.unsubscribe();
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

}
