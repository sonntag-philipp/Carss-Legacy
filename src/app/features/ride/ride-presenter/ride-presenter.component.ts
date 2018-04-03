import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'carss-ride-presenter',
  templateUrl: './ride-presenter.component.html',
  styleUrls: ['./ride-presenter.component.css']
})
export class RidePresenterComponent implements OnInit {

  public id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
