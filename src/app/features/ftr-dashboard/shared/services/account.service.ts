import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AccountService {

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) { }


  public getAccountDoc(): Observable<any> {

    return this.firestore.collection("accounts").doc(this.auth.auth.currentUser.uid).valueChanges();
  }

  public getAccountProfile(): Observable<any> {

    return this.firestore.collection("profiles").doc(this.auth.auth.currentUser.uid).valueChanges();
  }

  public updateAccountSettings(): boolean {
    return false;
  }
}
