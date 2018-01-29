import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.css']
})
export class DashboardSettingsComponent implements OnInit {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  public onBtnSignOut(): void {
    this.fireAuth.auth.signOut();
  }

}
