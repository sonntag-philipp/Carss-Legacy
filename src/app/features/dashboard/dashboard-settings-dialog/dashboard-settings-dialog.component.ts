import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {InfoDialogComponent} from '../../../misc/info-dialog/info-dialog.component';

@Component({
  selector: 'app-dashboard-settings-dialog',
  templateUrl: './dashboard-settings-dialog.component.html',
  styleUrls: ['./dashboard-settings-dialog.component.css']
})
export class DashboardSettingsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
