import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToolbarService} from '../../../services/toolbar.service';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.css']
})
export class DashboardSettingsComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Einstellungen";
  }
}
