import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from '../../../../shared/models/car.model';
import {AngularFirestore} from 'angularfire2/firestore';
import {CarModelId} from '../profile-editor.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile-editor-car',
  templateUrl: './profile-editor-car.component.html',
  styleUrls: ['./profile-editor-car.component.css']
})
export class ProfileEditorCarComponent implements OnInit {

  @Input()
  public car: CarModelId;

  public doorOptions = [
    2,
    5,
    "Sonstiges"
  ];

  public seatOptions = [
    2,
    5,
    7
  ];

  public brandOptions = [
    "Audi",
    "BMW",
    "Ford",
    "Mercedes-Benz",
    "Opel",
    "Renault",
    "Volkswagen",
    "Škoda",
    "Seat"
  ];


  public btnDelete(): void {
    this.firestore.collection("users").doc(this.car.uid).collection("cars").doc<CarModel>(this.car.id).delete().then(
      () => {
        this.snackBar.open("Erfolgreich gelöscht.", "Okay", {duration: 2000});
      }
    );
  }

  public formSubmit(form: any): void {
    if (form.touched && form.dirty && form.valid) {
      this.firestore.collection("users").doc(this.car.uid).collection("cars").doc<CarModel>(this.car.id).update(this.car).then(
        () => {
          this.snackBar.open("Änderungen gespeichert.", "Okay", {duration: 2000});
        }
      );
    }
  }

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

}
