import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {ProfileModel} from '../../../shared/models/profile.model';

@Component({
  selector: 'app-ftr-profile-presenter',
  templateUrl: './ftr-profile-presenter.component.html',
  styleUrls: ['./ftr-profile-presenter.component.css']
})
export class FtrProfilePresenterComponent implements OnInit {

  private profile: ProfileModel;

  public id: string;
  public showPlus: boolean;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firestore.collection("profiles").doc<ProfileModel>(this.id).valueChanges().subscribe(
      next => {
        this.profile = next;
        console.log(this.profile);
      },
      error => {
        console.error(error);
      }
    );
  }

}
