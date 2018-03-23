import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TagModel } from '../../../../models/tag.model';
import { ProfileService } from '../../profile.service';
import { VehicleModel } from '../../../../models/vehicle.model';
import { BackendService } from '../../../../backend/backend.service';

@Component({
  selector: 'carss-profile-editor-car',
  templateUrl: './profile-editor-car.component.html',
  styleUrls: ['./profile-editor-car.component.css']
})
export class ProfileEditorCarComponent implements OnInit {

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
    this.backend.chainNoun("vehicles").chainVerb(this.vehicle.id + "").chainNoun<TagModel>("tags").get().subscribe(
      next => {
        this._tags = next;
      }
    );
  }
}
