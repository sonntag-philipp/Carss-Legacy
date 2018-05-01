import { Component, Input, OnInit } from '@angular/core';
import { RideModel } from '../../models/ride.model';
import { TagModel } from '../../models/tag.model';
import { Observable } from 'rxjs/Observable';
import { BackendService } from '../../backend/backend.service';
import { ProfileService } from '../../features/profile/profile.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'carss-ride-container',
  templateUrl: './ride-container.component.html',
  styleUrls: ['./ride-container.component.css']
})
export class RideContainerComponent implements OnInit {

  @Input() ride: RideModel;
  @Input() tags: Observable<TagModel[]> = new Observable<TagModel[]>();

  constructor(
    private backend: BackendService,
    private profileService: ProfileService,
    private snackBar: MatSnackBar
  ) { }

  public deleteRide(): void {
    this.backend.chainNoun("rides").chainVerb(this.ride.id + "").delete().subscribe(
      next => {
        this.snackBar.open("Fahrt wurde erfolgreich gelöscht!", "Okay", {duration: 2000})

        this.profileService.deleteRide(this.ride);
        console.log(next);
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
  }

}
