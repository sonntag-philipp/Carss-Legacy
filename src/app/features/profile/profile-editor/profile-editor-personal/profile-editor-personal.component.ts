import {Component, Input, OnInit} from '@angular/core';
import {ProfileModel} from '../../../../shared/models/profile.model';
import {AngularFirestore} from 'angularfire2/firestore';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile-editor-personal',
  templateUrl: './profile-editor-personal.component.html',
  styleUrls: ['./profile-editor-personal.component.css']
})
export class ProfileEditorPersonalComponent implements OnInit {

  @Input()
  profile: ProfileModel;

  @Input()
  uid: string;


  public sexOptions = [
    "weiblich",
    "männlich"
  ];

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public formSubmit(form: any): void {

    if (form.valid && form.touched && form.dirty) {
      this.firestore.collection("users").doc(this.uid).collection("user_docs").doc("profile").update(this.profile).then(
        () => {
          this.snackBar.open("Änderungen gespeichert.", "Okay", {duration: 2000});
        }
      );
    }
  }
}
