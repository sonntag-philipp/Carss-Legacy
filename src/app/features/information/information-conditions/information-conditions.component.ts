import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../backend/backend.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-information-conditions',
  templateUrl: './information-conditions.component.html',
  styleUrls: ['./information-conditions.component.css']
})
export class InformationConditionsComponent implements OnInit {

  public env = environment;

  public conditions: Observable<string>;

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.conditions = this.backendService.chainNoun("info").chainVerb<string>("conditions.md").get();
  }

}
