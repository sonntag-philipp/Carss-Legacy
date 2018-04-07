import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-information-contact',
  templateUrl: './information-contact.component.html',
  styleUrls: ['./information-contact.component.css']
})
export class InformationContactComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

}
