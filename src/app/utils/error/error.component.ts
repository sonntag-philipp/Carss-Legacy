import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'carss-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public message: string;
  public statusCode: string;
  public subtitle: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
        this.statusCode = data['statusCode'];
        this.subtitle = data['subtitle'];
      }
    );
  }

}
