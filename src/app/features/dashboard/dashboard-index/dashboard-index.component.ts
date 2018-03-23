import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BackendService } from '../../../services/backend.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../../models/user.model';

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
    this.backend.noun('users').verb(this.auth.auth.currentUser.uid).get();
  }
}
