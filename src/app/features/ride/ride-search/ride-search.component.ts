import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'carss-ride-search',
  templateUrl: './ride-search.component.html',
  styleUrls: ['./ride-search.component.css']
})
export class RideSearchComponent implements OnInit {

  private query: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.query = this.route.snapshot.params['query'];

    console.log(this.query);
  }

}
