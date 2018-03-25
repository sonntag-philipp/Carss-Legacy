import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../../models/user.model';
import { BackendService } from '../../../backend/backend.service';
import { UserSessionService } from '../../../services/user-session.service';

@Component({
  selector: 'carss-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  constructor(public userSession: UserSessionService) {
  }

  ngOnInit() { }
}
