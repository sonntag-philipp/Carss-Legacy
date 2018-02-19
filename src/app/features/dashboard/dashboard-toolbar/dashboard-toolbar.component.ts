import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../../../misc/info-dialog/info-dialog.component';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard-toolbar',
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.css']
})
export class DashboardToolbarComponent implements OnInit {

  public uid: string;

  constructor(
    private dialog: MatDialog,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.uid = this.auth.auth.currentUser.uid;
  }

  public onBtnSettings(): void {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: "Noch nicht verfügbar",
        message: "Kommt aber bald ^^"
      }
    });
  }

}
