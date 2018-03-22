import { Component, Input, OnInit } from '@angular/core';
import { VehicleModel } from '../../../../models/vehicle.model';
import { BackendService } from '../../../../services/backend.service';
import { TagModel } from '../../../../models/tag.model';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'carss-profile-presenter-car',
  templateUrl: './profile-presenter-car.component.html',
  styleUrls: ['./profile-presenter-car.component.css']
})
export class ProfilePresenterCarComponent implements OnInit {

  @Input()
  vehicle: VehicleModel;

  get tags(): TagModel[] {
    return this._tags;
  }
  private _tags: TagModel[];

  constructor(
    private backend: BackendService,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.backend.noun("vehicles").verb(this.vehicle.id + "").noun<TagModel>("tags").get().subscribe(
      next => {
        this._tags = next;
      }
    );
  }

  public btnSave() {

  }
}
