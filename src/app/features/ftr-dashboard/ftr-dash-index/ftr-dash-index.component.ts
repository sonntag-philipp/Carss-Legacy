import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AccountService} from '../shared/services/account.service';

@Component({
  selector: 'app-ftr-dash-index',
  templateUrl: './ftr-dash-index.component.html',
  styleUrls: ['./ftr-dash-index.component.css']
})
export class FtrDashIndexComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getAccountDoc().subscribe(
      next => {
        console.log(next);
      },
      error => {
        console.error(error);
      }
    );
    this.accountService.getAccountProfile().subscribe(
      next => {
        console.log(next);
      },
      error => {
        console.error(error);
      }
    );
  }

}
