import { Component, OnInit } from '@angular/core';
import {ProfileModel} from '../../../shared/models/profile.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserModel} from '../../../shared/models/user.model';
import {CarModel} from '../../../shared/models/car.model';
import {Observable} from 'rxjs/Observable';

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
  public cars: Observable<CarModelId[]>;

  private carCollection: AngularFirestoreCollection<CarModel>;

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

    this.carCollection = this.db.collection("users").doc(this.id).collection<CarModelId>("cars");
    this.cars = this.carCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const uid = this.id;
        const data = a.payload.doc.data() as CarModel;
        const id = a.payload.doc.id;
        return { id, uid, ...data };
      });
    });
  }


  public onSubmit(form: any) {

    if (form === undefined) {
      return false;
    }

    if (form.touched && form.valid) {
      this.db.collection("users").doc(this.id).collection("user_docs").doc("profile").update(this.profile).then(
        () => {
          this.router.navigate(["../"], {relativeTo: this.route});
        }
      );
    }
    return false;
  }

  public btnAddCar(): void {
    this.db.collection("users").doc(this.id).collection("cars").add({model: "New"});
  }
}

export interface CarModelId extends CarModel {
  id: string;
  uid: string;
}
