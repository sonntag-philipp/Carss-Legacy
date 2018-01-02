import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.css']
})
export class SearchToolbarComponent implements OnInit {

  @Input()
  dataSource: any;

  public scrollState = false;

  constructor() { }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const num = window.pageYOffset;
    if ( num > 140 ) {
      this.scrollState = true;
    }else if (this.scrollState && num < 140) {
      this.scrollState = false;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }
}
