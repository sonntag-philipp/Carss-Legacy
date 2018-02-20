import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../shared/services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public service: ToolbarService
  ) { }

  ngOnInit() {
  }

}
