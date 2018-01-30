import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ftr-dash-index-drive',
  templateUrl: './ftr-dash-index-drive.component.html',
  styleUrls: ['./ftr-dash-index-drive.component.css']
})
export class FtrDashIndexDriveComponent implements OnInit {

  public displayedColumns = ['driverName', 'destination'];
  public tableDataSource = new MatTableDataSource(TEST_DATA);

  constructor() { }

  ngOnInit() {
  }

}

export interface TableElement {
  driverName: string;
  destination: string;
  start: string;
}

const TEST_DATA: TableElement[] = [
  {driverName: "Marty", destination: "Werlte", start: "BBS Pbg."},
  {driverName: "Kevin", destination: "Werlte", start: "BBS Pbg."},
  {driverName: "Alexander", destination: "Borkum", start: "BBS Pbg."},
  {driverName: "Dominik", destination: "Bielefeld", start: "BBS Pbg."},
  {driverName: "Marina", destination: "Aschendorf", start: "BBS Pbg."},
  {driverName: "Larry", destination: "Oberhausen", start: "BBS Pbg."},
  {driverName: "Karl Heinz", destination: "Stuttgart", start: "BBS Pbg."},
  {driverName: "Nadja", destination: "Lorup", start: "BBS Pbg."},
  {driverName: "Jens", destination: "Dersum", start: "BBS Pbg."},
  {driverName: "Carsten", destination: "Werlte", start: "BBS Pbg."},
  {driverName: "Marina", destination: "Aschendorf", start: "BBS Pbg."},
  {driverName: "Larry", destination: "Oberhausen", start: "BBS Pbg."},
  {driverName: "Karl Heinz", destination: "Stuttgart", start: "BBS Pbg."},
  {driverName: "Nadja", destination: "Lorup", start: "BBS Pbg."},
  {driverName: "Jens", destination: "Dersum", start: "BBS Pbg."},
  {driverName: "Carsten", destination: "Werlte", start: "BBS Pbg."},
  {driverName: "Marina", destination: "Aschendorf", start: "BBS Pbg."},
  {driverName: "Larry", destination: "Oberhausen", start: "BBS Pbg."},
  {driverName: "Karl Heinz", destination: "Stuttgart", start: "BBS Pbg."},
  {driverName: "Nadja", destination: "Lorup", start: "BBS Pbg."},
  {driverName: "Jens", destination: "Dersum", start: "BBS Pbg."},
  {driverName: "Carsten", destination: "Werlte", start: "BBS Pbg."}
];
