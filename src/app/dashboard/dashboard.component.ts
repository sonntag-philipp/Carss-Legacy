import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  public onBtnSettings(): void {
    this.router.navigate(['settings']);
  }

  public onBtnJoin(): void {

  }

  public onBtnDrive(): void {

  }

  ngOnInit() {
  }

}
