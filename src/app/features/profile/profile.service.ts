import {Injectable} from '@angular/core';
import {ProfileModel} from '../../shared/models/profile.model';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class ProfileService {

  public profile: ProfileModel;
  public chips: string[];

  private id: string;

  constructor(
    private fireauth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  public load(id: string): void {

    this.firestore.collection("users").
                    doc<any>(this.fireauth.auth.currentUser.uid).valueChanges().subscribe(
      next => {
        this.chips = next.systemChips;
        console.log(this.chips);
      }
    );


    this.firestore.collection("users").
                    doc(this.fireauth.auth.currentUser.uid).
                      collection("user_docs").
                        doc<ProfileModel>("profile").valueChanges().subscribe(

      next => {
        this.profile = next;
      },
      error => {
        console.error(error);
      }
    );
  }

  public update(): void {
    this.firestore.collection("users").
                      doc(this.fireauth.auth.currentUser.uid).
                        collection("user_docs").
                          doc("profile").update(this.profile);
  }
}
