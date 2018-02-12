import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../../../misc/info-dialog/info-dialog.component';

@Component({
  selector: 'app-dashboard-toolbar',
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.css']
})
export class DashboardToolbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public onBtnMessages(): void {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: "Noch nicht verfügbar",
        message: "Kommt aber bald ^^"
      }
    });
  }

}
