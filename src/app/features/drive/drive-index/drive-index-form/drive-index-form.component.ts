import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {CarModel} from '../../../../shared/models/car.model';
import {CarModelId} from '../../../profile/profile-editor/profile-editor.component';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-drive-index-form',
  templateUrl: './drive-index-form.component.html',
  styleUrls: ['./drive-index-form.component.css']
})
export class DriveIndexFormComponent implements OnInit {

  public form: NgForm;
  public start: string;

  public cars: Observable<CarModel[]>;

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.cars = this.db.collection("users").doc(this.auth.auth.currentUser.uid).collection<CarModel>("cars").valueChanges();
  }

  public submit(form: any): void {

  }

}
