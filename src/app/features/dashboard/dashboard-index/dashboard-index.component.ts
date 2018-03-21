import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {ProfileModel} from '../../../models/profile.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'carss-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private users: UsersService
  ) { }

  public profile: Observable<ProfileModel>;

  ngOnInit() {
    this.profile = this.firestore.collection("users")
                                  .doc(this.fireAuth.auth.currentUser.uid)
                                    .collection("user_docs")
                                      .doc<ProfileModel>("profile").valueChanges();

  }

  public onBtn() {
    this.users.getUser(this.fireAuth.auth.currentUser.uid).subscribe(
      next => {
        console.log(next);
      }
    );
  }

}
