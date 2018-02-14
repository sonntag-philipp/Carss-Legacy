import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {CharacteristicsModel} from '../../../shared/models/characteristics.model';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ProfileModel} from '../../../shared/models/profile.model';
import {UserModel} from '../../../shared/models/user.model';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile-presenter',
  templateUrl: './profile-presenter.component.html',
  styleUrls: ['./profile-presenter.component.css']
})
export class ProfilePresenterComponent implements OnInit {

  /**
   * The google-uid of the presented profile.
   */
  public id: string;

  /**
   * True if the user views his own profile.
   */
  public ownProfile: boolean;

  public profile: Observable<ProfileModel>;
  public user: Observable<UserModel>;


  constructor(
    private route: ActivatedRoute,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.auth.auth.currentUser.uid === this.id) {
      this.ownProfile = true;
    }

    this.user = this.db.collection("users").doc<UserModel>(this.id).valueChanges();
    this.user.subscribe(
      next => {
        console.log(next);
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );

    this.profile = this.db.collection("users").doc(this.id).collection("user_docs").doc<ProfileModel>("profile").valueChanges();
    this.profile.subscribe(
      next => {
        console.log(next);
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );
  }

}
