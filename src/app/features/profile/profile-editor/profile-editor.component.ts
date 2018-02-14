import { Component, OnInit } from '@angular/core';
import {ProfileModel} from '../../../shared/models/profile.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserModel} from '../../../shared/models/user.model';
import {UUID} from 'angular2-uuid';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  public id: string;
  public ready: boolean;
  private uuid: string;

  public profile: ProfileModel;
  public user: UserModel;

  constructor(
    private route: ActivatedRoute,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.db.collection("users").doc<UserModel>(this.id).valueChanges().subscribe(
      next => {
        this.user = next;
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );

    this.db.collection("users").doc(this.id).collection("user_docs").doc<ProfileModel>("profile").valueChanges().subscribe(
      next => {
        this.profile = next;
        this.ready = true;
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );
  }

  public submitChanges(form: NgForm): void {
    this.uuid = UUID.UUID();

    this.db.collection("users").doc(this.id).collection("tokens").add({token: this.uuid});
  }
}
