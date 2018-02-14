import { Component, OnInit } from '@angular/core';
import {ProfileModel} from '../../../shared/models/profile.model';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  public id: string;

  constructor(
    private route: ActivatedRoute,
    public profileService: ProfileService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.profileService.load(this.id);
  }

  logForm(form: any) {
    console.log(form);
  }
}
