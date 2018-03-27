import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../../services/toolbar.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'carss-frame-toolbar',
  templateUrl: './frame-toolbar.component.html',
  styleUrls: ['./frame-toolbar.component.css']
})
export class FrameToolbarComponent implements OnInit {

  constructor(
    public service: ToolbarService,
    public session: SessionService
  ) { }

  ngOnInit() {
  }

}
