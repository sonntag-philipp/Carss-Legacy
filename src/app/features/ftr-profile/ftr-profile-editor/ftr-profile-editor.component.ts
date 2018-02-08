import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-ftr-profile-editor',
  templateUrl: './ftr-profile-editor.component.html',
  styleUrls: ['./ftr-profile-editor.component.css']
})
export class FtrProfileEditorComponent implements OnInit {

  public id: string;

  constructor(
    private route: ActivatedRoute,
    private fireauth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Navigate other users back to the presenter page.
    if (this.id !== this.fireauth.auth.currentUser.uid) {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

}
