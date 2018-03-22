import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carss-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  @Input()
  url: string;

  @Input()
  editable: boolean;

  constructor() { }

  ngOnInit() {
    if (this.url === "") {
      // TODO: Use other resource.
      this.url = "http://shashgrewal.com/wp-content/uploads/2015/05/default-placeholder-300x300.png";
    }
  }

}
