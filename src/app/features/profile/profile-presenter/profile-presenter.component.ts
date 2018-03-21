import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../profile.service';
import { ProfilesService } from '../../../services/profiles.service';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../../../services/globals.service';
import { AngularFireAuth } from 'angularfire2/auth';

declare const google: any;

@Component({
  selector: 'app-profile-presenter',
  templateUrl: './profile-presenter.component.html',
  styleUrls: ['./profile-presenter.component.css']
})
export class ProfilePresenterComponent implements OnInit {

  /**
   * The google-uid of the presented profile.
   */
  public uid: string;

  constructor(
    private route: ActivatedRoute,
    public profileService: ProfileService,
    private globals: GlobalsService,
    private profiles: ProfilesService,
    private http: HttpClient,
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['id'];

    this.http.get(this.globals.rest.address + "/profiles/")

    this.profileService.loadProfile(this.uid);
  }

}
