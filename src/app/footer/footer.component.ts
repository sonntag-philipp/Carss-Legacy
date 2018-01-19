import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

}
