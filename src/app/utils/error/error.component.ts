import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'carss-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() message: string;
  @Input() statusCode: string;
  @Input() subtitle: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.statusCode === undefined) {
      this.route.data.subscribe(
        (data: Data) => {
          this.message = data['message'];
          this.statusCode = data['statusCode'];
          this.subtitle = data['subtitle'];
        }
      );
    }
  }

}
