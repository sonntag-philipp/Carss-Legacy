import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../../backend/backend.service';

@Component({
  selector: 'carss-ride-search',
  templateUrl: './ride-search.component.html',
  styleUrls: ['./ride-search.component.css']
})
export class RideSearchComponent implements OnInit {

  public query: string;

  public searched: boolean;
  public results = [];

  constructor(
    private route: ActivatedRoute,
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.query = this.route.snapshot.params['query'];


    this.backend.chainNoun<any>("search/rides/" + this.query).get().subscribe(
      next => {
        this.results = next;

        for (const item of next) {
          item.tags = this.backend.chainNoun("rides").chainVerb(item.ride_id).chainNoun("tags").get();
          item.driver = this.backend.chainNoun("users").chainVerb(item.creator_id).get();
        }

        console.log(next);



        this.searched = true;
      }
    );
  }

}
