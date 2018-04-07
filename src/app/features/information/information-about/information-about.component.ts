import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'carss-information-about',
  templateUrl: './information-about.component.html',
  styleUrls: ['./information-about.component.css']
})
export class InformationAboutComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

}
