import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {ProfileModel} from '../../../models/profile.model';

@Component({
  selector: 'carss-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  public profile: Observable<ProfileModel>;

  ngOnInit() {
    this.profile = this.firestore.collection("users")
                                  .doc(this.fireAuth.auth.currentUser.uid)
                                    .collection("user_docs")
                                      .doc<ProfileModel>("profile").valueChanges();

  }

}
