import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private iconRegistry: MatIconRegistry
  ) {
    iconRegistry.setDefaultFontSetClass("material-icons");
  }

  public onBtnJoin(): void {

  }

  public onBtnDrive(): void {

  }

  ngOnInit() {

  }

}
