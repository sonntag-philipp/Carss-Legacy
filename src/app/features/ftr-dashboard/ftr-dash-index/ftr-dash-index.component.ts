import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-ftr-dash-index',
  templateUrl: './ftr-dash-index.component.html',
  styleUrls: ['./ftr-dash-index.component.css']
})
export class FtrDashIndexComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

}
