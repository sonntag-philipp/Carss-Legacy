import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { VehicleModel } from '../../models/vehicle.model';
import { TagModel } from '../../models/tag.model';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../backend/backend.service';
import { RideModel } from '../../models/ride.model';

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
    tags: false,
    rides: false
  };

  public user: UserModel;

  public rides: {
    ride: RideModel,
    tags: TagModel[]
  }[] = [];

  get userTags(): TagModel[] {
    return this._userTags;
  }
  private _userTags: TagModel[];

  public vehicles: VehicleModel[] = [];

  /**
   * Loads the profile data into the profile object of the profile service.
   * @param {string} uid The Google user id of the profile to be loaded.
   * @returns {boolean} Returns false if the profile could not be loaded.
   */
  public getProfile(uid: string) {

    this.rides = [];
    this.initialized.rides = false;
    this.initialized.user = false;
    this.initialized.tags = false;

    this.backend.chainNoun("users").chainVerb<UserModel>(uid).get().subscribe(
      next => {
        this.user = next;
        this.initialized.user = true;
      },
      err => {
        console.log(err);
      }
    );

    this.backend.chainNoun("users").chainVerb(uid).chainNoun<TagModel>("tags").get().subscribe(
      next => {
        this._userTags = next;
        this.initialized.tags = true;
      }
    );

    this.backend.chainNoun("users").chainVerb(uid).chainNoun<RideModel>("rides").get().subscribe(
      next => {
        console.log(next);


        for (const item of next) {
          const lel: any = {};

          lel.tags = this.backend.chainNoun("rides").chainVerb(item.id + "").chainNoun("tags").get();
          lel.ride = item;
          this.rides.push(lel);
        }
        if (this.rides.length > 0) {
          this.initialized.rides = true;
        }

      }
    );
  }

  public deleteRide(ride: RideModel) {
    for (const item of this.rides) {
      if (item.ride === ride) {
        this.rides.splice(this.rides.indexOf(item), 1);
      }
    }

    if (this.rides.length === 0) {
      this.initialized.rides = false;
    }
  }

  public putUser() {
    this.backend.chainNoun("users").chainVerb(this.user.id).put(this.user).subscribe(
      next => {
        this.snackBar.open("Nutzerdaten erfolgreich abgespeichert!", "Okay", {duration: 1500});
      }
    );
  }

  public putVehicle(vehicle: VehicleModel) {
    this.backend.chainNoun("vehicles").chainVerb(vehicle.id + "").put(vehicle).subscribe(
      next => {
        this.snackBar.open(vehicle.name + " wurde erfolgreich abgespeichert!", "Okay");
      }
    );
  }

  public postVehicle(vehicle: VehicleModel) {
    this.backend.chainNoun("vehicles").post<VehicleModel>(vehicle).subscribe(
      next => {
        this.vehicles.push(next.body);
      }
    );
  }

  public deleteVehicle(vehicle: VehicleModel) {/*
    this.backend.chainNoun("vehicles").chainVerb(vehicle.id + "").delete().subscribe(
      next => {
        this.vehicles.splice(this.vehicles.indexOf(vehicle), 1);
        this.snackBar.open(vehicle.name + " wurde erfolgreich gelöscht!", "Okay");
      }
    );*/
  }
}
