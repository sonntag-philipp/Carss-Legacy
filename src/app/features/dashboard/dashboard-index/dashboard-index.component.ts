import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'carss-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private backend: BackendService
  ) { }


  ngOnInit() {

  }

  public onBtn() {
  }

}
