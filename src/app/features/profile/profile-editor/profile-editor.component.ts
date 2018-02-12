import { Component, OnInit } from '@angular/core';
import {ProfileModel} from '../../../shared/models/profile.model';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  public profile: Observable<ProfileModel>;
  public id: string;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private auth: AngularFireAuth) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.profile = this.db.collection("users").doc(this.id).collection("user_docs").doc<ProfileModel>("profile").valueChanges();
  }

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
  ];
}
