import { Component, OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

@Component({
  selector: 'app-drive-new',
  templateUrl: './drive-new.component.html',
  styleUrls: ['./drive-new.component.css']
})
export class DriveNewComponent implements OnInit {

  constructor(
    private mapsApi: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
  }

}
