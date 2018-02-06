import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../../../misc/info-dialog/info-dialog.component';

@Component({
  selector: 'app-ftr-dash-toolbar',
  templateUrl: './ftr-dash-toolbar.component.html',
  styleUrls: ['./ftr-dash-toolbar.component.css']
})
export class FtrDashToolbarComponent implements OnInit {

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
