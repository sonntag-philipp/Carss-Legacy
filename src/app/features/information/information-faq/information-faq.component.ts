import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'carss-information-faq',
  templateUrl: './information-faq.component.html',
  styleUrls: ['./information-faq.component.css']
})
export class InformationFaqComponent implements OnInit {

  public env = environment;

  constructor() { }

  ngOnInit() {
  }

}
