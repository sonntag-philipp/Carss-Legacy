import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../../services/toolbar.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Mitfahren";
  }

}
