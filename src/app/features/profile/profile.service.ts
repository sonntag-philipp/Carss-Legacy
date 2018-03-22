import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { VehicleModel } from '../../models/vehicle.model';
import { BackendService } from '../../services/backend.service';
import { TagModel } from '../../models/tag.model';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProfileService {

  constructor(
    private backend: BackendService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public initialized: any = {
    vehicles: false,
    user: false,
    tags: false
  };

  public user: UserModel;

  get userTags(): TagModel[] {
    return this._userTags;
  }
  private _userTags: TagModel[];


  public vehicles: VehicleModel[];

  /**
   * Loads the profile data into the profile object of the profile service.
   * @param {string} uid The Google user id of the profile to be loaded.
   * @returns {boolean} Returns false if the profile could not be loaded.
   */
  public getProfile(uid: string) {

    this.backend.noun("users").verb<UserModel>(uid).get().subscribe(
      next => {
        this.user = next;
        this.initialized.user = true;
      }
    );

    this.backend.noun("users").verb(uid).noun<TagModel>("tags").get().subscribe(
      next => {
        this._userTags = next;
        this.initialized.tags = true;
      }
    );

    this.backend.noun("users").verb(uid).noun<VehicleModel>("vehicles").get().subscribe(
      next => {
        this.vehicles = next;
        this.initialized.vehicles = true;
      }
    );
  }

  public putUser() {
    this.backend.noun("users").verb(this.user.id).put(this.user).subscribe(
      next => {
        this.snackBar.open("Nutzerdaten erfolgreich abgespeichert!", "Okay");
      }
    );
  }

  public putVehicle(vehicle: VehicleModel) {
    this.backend.noun("vehicles").verb(vehicle.id + "").put(vehicle).subscribe(
      next => {
        this.snackBar.open(vehicle.name + " wurde erfolgreich abgespeichert!", "Okay");
      }
    );
  }

  public postVehicle() {
    this.backend.noun("vehicles").post({}).subscribe(
      next => {
        this.vehicles.push(next.body);
      }
    );
  }

  public deleteVehicle(vehicle: VehicleModel) {
    this.backend.noun("vehicles").verb(vehicle.id + "").delete().subscribe(
      next => {
        this.vehicles.splice(this.vehicles.indexOf(vehicle), 1);
        this.snackBar.open(vehicle.name + " wurde erfolgreich gelöscht!", "Okay");
      }
    );
  }
}
