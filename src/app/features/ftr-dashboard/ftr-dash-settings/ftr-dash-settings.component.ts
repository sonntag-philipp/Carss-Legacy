import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {SettingsService} from '../shared/services/settings.service';

@Component({
  selector: 'app-ftr-dash-settings',
  templateUrl: './ftr-dash-settings.component.html',
  styleUrls: ['./ftr-dash-settings.component.css']
})
export class FtrDashSettingsComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    public settings: SettingsService
  ) { }

  ngOnInit() {
    this.settings.observeAccountDoc();
  }
}
