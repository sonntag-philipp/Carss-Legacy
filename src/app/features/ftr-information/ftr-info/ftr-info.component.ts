import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ftr-info',
  templateUrl: './ftr-info.component.html',
  styleUrls: ['./ftr-info.component.css']
})
export class FtrInfoComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
