import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarService } from '../../../services/toolbar.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.css']
})
export class InformationComponent implements OnInit {

  public env = environment;

  constructor(
    public router: Router,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = 'Informationen';
  }

}
