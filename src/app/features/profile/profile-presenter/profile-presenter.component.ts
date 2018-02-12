import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {CharacteristicsModel} from '../../../shared/models/characteristics.model';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ProfileModel} from '../../../shared/models/profile.model';

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

  public chips = [
    {
      name: "Admin",
      description: "Gehört zum Team von Carss",
      system: true
    },
    {
      name: "GYT16-1",
      description: "Geht in die Klasse GYT16-1",
      system: false
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.auth.auth.currentUser.uid === this.id) {
      this.ownProfile = true;
    }

    this.profile = this.db.collection("users").doc(this.id).collection("user_docs").doc<ProfileModel>("profile").valueChanges();
    this.profile.subscribe(next => console.log(next));

  }

}
