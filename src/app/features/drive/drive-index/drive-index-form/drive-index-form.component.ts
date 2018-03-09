import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-drive-index-form',
  templateUrl: './drive-index-form.component.html',
  styleUrls: ['./drive-index-form.component.css']
})
export class DriveIndexFormComponent implements OnInit {

  public form: NgForm;
  public start: string;

  constructor() { }

  ngOnInit() {
  }

  public submit(f: any): void {
    console.log(this.start);
    console.log(f);
  }

}
