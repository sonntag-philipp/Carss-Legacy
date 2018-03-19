import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carss-dashboard-index-drive',
  templateUrl: './dashboard-index-drive.component.html',
  styleUrls: ['./dashboard-index-drive.component.css']
})
export class DashboardIndexDriveComponent implements OnInit {

  public originSelect = 0;
  public destinationSelect = 0;

  public originChanged(event: any): void {
    if (event.value === 1 || event.value === 3) {
      this.destinationSelect = 2;
      this.originSelect = event.value;
    }
  }

  public destinationChanged(event: any): void {
    if (event.value === 1 || event.value === 3) {
      this.originSelect = 2;
      this.destinationSelect = event.value;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
