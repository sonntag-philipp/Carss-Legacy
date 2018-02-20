import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {ToolbarService} from '../../../shared/services/toolbar.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.css']
})
export class InformationComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Informationen";
  }

}
