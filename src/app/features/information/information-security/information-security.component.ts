import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-information-security',
  templateUrl: './information-security.component.html',
  styleUrls: ['./information-security.component.css']
})
export class InformationSecurityComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

}
