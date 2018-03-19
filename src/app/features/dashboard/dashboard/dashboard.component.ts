import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../../services/toolbar.service';

@Component({
  selector: 'carss-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Dashboard";
  }

}
