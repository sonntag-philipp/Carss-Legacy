import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../../models/user.model';
import { BackendService } from '../../../backend/backend.service';

@Component({
  selector: 'carss-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  public user: Observable<UserModel>;

  constructor(private backend: BackendService,
              private auth: AngularFireAuth) {
  }


  ngOnInit() {
    this.backend.chainNoun('users').chainVerb(this.auth.auth.currentUser.uid).get();
  }
}
