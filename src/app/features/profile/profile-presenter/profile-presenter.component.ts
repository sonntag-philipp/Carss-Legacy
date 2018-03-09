import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ProfileModel} from '../../../shared/models/profile.model';
import {UserModel} from '../../../shared/models/user.model';
import {CarModelId} from '../profile-editor/profile-editor.component';
import {CarModel} from '../../../shared/models/car.model';

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

  private cars: Observable<CarModel[]>;


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
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );


    this.cars = this.db.collection("users").doc(this.id).collection<CarModel>("cars").valueChanges();


    this.profile = this.db.collection("users").doc(this.id).collection("user_docs").doc<ProfileModel>("profile").valueChanges();
    this.profile.subscribe(
      next => {
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );
  }

}
