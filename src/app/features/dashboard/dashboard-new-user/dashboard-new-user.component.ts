import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'carss-dashboard-new-user',
  templateUrl: './dashboard-new-user.component.html',
  styleUrls: ['./dashboard-new-user.component.css']
})
export class DashboardNewUserComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

}
