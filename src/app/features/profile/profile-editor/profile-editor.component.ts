import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { VehicleModel } from '../../../models/vehicle.model';
import { MapsService } from '../../../services/maps.service';

@Component({
  selector: 'carss-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  /**
   * The google-uid of the presented profile.
   */
  public uid: string;

  public vehicles: VehicleModel[];

  constructor(
    private route: ActivatedRoute,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['id'];

    this.profileService.getProfile(this.uid);
    this.vehicles = this.profileService.vehicles;
  }

  public addressChange(data: string) {
    this.profileService.user.address = data;
  }

}
