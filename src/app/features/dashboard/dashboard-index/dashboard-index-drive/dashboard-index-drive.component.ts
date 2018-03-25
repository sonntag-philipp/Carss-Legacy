import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RideModel } from '../../../../models/ride.model';
import { BackendService } from '../../../../backend/backend.service';
import { TagModel } from '../../../../models/tag.model';
import { PlaceModel } from '../../../../models/place.model';
import { UserSessionService } from '../../../../services/user-session.service';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'carss-dashboard-index-drive',
  templateUrl: './dashboard-index-drive.component.html',
  styleUrls: ['./dashboard-index-drive.component.css']
})
export class DashboardIndexDriveComponent implements OnInit {

  private ride: RideModel = {
    origin: "",
    destination: "",
    description: ""
  };
  private tags: TagModel[] = [];
  private newAddress: PlaceModel;


  public place: PlaceModel = {
    lat: 0,
    lng: 0,
    id: ""
  };

  @ViewChild('origin')
  origin: MatSelect;

  @ViewChild('destination')
  destination: MatSelect;

  public routeChanged(data: any): void {

  }

  constructor(
    private backend: BackendService,
    private userSession: UserSessionService
  ) { }

  public ngOnInit() { }

  public placeChanged(place: PlaceModel) {
    if (this.destination.value === "newAddress") {
      this.ride.destination = place.id;
    }
    if (this.origin.value === "newAddress") {
      this.ride.origin = place.id;
    }
  }

  public componentsChanged(components: string[]) {
    this.tags = [];
    for (const item of components) {
      this.tags.push({name: item});
    }
  }

  public postRide() {
    console.log(this.ride);
  }

}
