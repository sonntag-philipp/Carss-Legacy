import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

}
