import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../../services/toolbar.service';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'carss-frame-toolbar',
  templateUrl: './frame-toolbar.component.html',
  styleUrls: ['./frame-toolbar.component.css']
})
export class FrameToolbarComponent implements OnInit {

  public searchValue: string;

  constructor(
    public service: ToolbarService,
    public session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public search(data: any) {
    if (this.searchValue !== "") {
      console.log(this.searchValue);

      this.router.navigate(['/ride', 'search', this.searchValue]);


    }
  }

}
