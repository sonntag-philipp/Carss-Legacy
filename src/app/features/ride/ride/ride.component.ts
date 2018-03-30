import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../../services/toolbar.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {

  public env = environment;

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Mitfahren";
  }

}
