import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { SessionService } from '../../../services/session.service';

declare const google: any;

@Component({
  selector: 'carss-profile-presenter',
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
    public session: SessionService
  ) { }

  ngOnInit() {

    this.uid = this.route.snapshot.params['id'];

    this.profileService.getProfile(this.uid);
  }

}
