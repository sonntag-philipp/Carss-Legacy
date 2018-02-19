import { Component, OnInit } from '@angular/core';
import {ProfileModel} from '../../../shared/models/profile.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserModel} from '../../../shared/models/user.model';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  public id: string;
  public ready: boolean;

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


  public onSubmit(form: any) {

    if (form === undefined) {
      return false;
    }

    if (form.touched && form.valid) {
      /**
       * Sicherheit, Sicherheit, was ist Sicherheit? xD
       */
      this.db.collection("users").doc(this.id).collection("user_docs").doc("profile").update(this.profile).then(
        () => {
          this.router.navigate(["../"], {relativeTo: this.route});
        }
      );
    }
    return false;
  }
}
