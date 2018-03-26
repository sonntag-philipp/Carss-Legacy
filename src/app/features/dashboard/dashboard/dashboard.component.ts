import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../../services/toolbar.service';
import { UserSessionService } from '../../../services/user-session.service';

@Component({
  selector: 'carss-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private toolbarService: ToolbarService,
              public userSession: UserSessionService) {
  }

  ngOnInit() {
    this.toolbarService.hidden = true;
  }

}
