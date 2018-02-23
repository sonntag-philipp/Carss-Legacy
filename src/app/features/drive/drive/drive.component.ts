import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../../shared/services/toolbar.service';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Fahren";
  }

}
