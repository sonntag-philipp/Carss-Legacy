import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RideModel } from '../../../../models/ride.model';
import { BackendService } from '../../../../backend/backend.service';
import { TagModel } from '../../../../models/tag.model';
import { PlaceModel } from '../../../../models/place.model';
import { SessionService } from '../../../../services/session.service';
import { MatSelect, MatSnackBar } from '@angular/material';
import { MapsService } from '../../../../services/maps.service';

@Component({
  selector: 'carss-dashboard-index-drive',
  templateUrl: './dashboard-index-drive.component.html',
  styleUrls: ['./dashboard-index-drive.component.css']
})
export class DashboardIndexDriveComponent implements OnInit {

  private direction = "destination";

  public ride: RideModel = {
    origin: "",
    destination: "",
    description: ""
  };

  public tags: TagModel[] = [];

  constructor(
    private backend: BackendService,
    private userSession: SessionService,
    private mapsService: MapsService,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit() {
    this.tags[0] = {name: "Zielpunkt BBS"};
  }

  public placeChanged(place: string) {
    if (this.direction === "destination") {
      this.ride.destination = place;
      this.ride.origin = "ChIJG0-toC-yt0cRxAXMiEYhyng";
    }
    if (this.direction === "origin") {
      this.ride.origin = place;
      this.ride.destination = "ChIJG0-toC-yt0cRxAXMiEYhyng";
    }


    this.mapsService.getComponents(place).subscribe(
      next => {
        this.tags[1] = {name: next.addressComponents[0]};
        if (next.addressComponents[1] !== undefined) {
          this.tags[2] = {name: next.addressComponents[1]};
        } else {
          this.tags.splice(2, 1);
        }
      }
    );
  }

  public directionChange(value: any) {
    if (this.direction !== value) {
      const dest = this.ride.destination;
      this.ride.destination = this.ride.origin;
      this.ride.origin = dest;
    }
    if (this.direction === "destination") {
      this.tags[0] = {name: "Zielpunkt BBS"};
    }
    if (this.direction === "origin") {
      this.tags[0] = {name: "Startpunkt BBS"};
    }

    this.direction = value;
  }

  public postRide() {
    if (this.ride.origin !== "" && this.ride.destination !== "") {
      this.backend.chainNoun("rides").post(this.ride).subscribe(
        next => {
          this.snackBar.open("Die Fahrt wurde gespeichert.", "Okay", {duration: 2500});

          for (const item of this.tags) {
            this.backend.chainNoun("rides").chainVerb(next.body.id + "").chainNoun("tags").post(item).subscribe(
              next => {
                console.log(next);
              }
            );
          }

        },
        err => {
          this.snackBar.open("Etwas stimmt mit den Server nicht, versuche es später nochmal.", "Okay", {duration: 2500});
        }
      );
    } else {
      this.snackBar.open("Bitte füll die Felder zuerst aus.", "Okay", {duration: 2500});
    }

  }

}
