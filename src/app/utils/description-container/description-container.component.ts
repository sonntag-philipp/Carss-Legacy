import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carss-description-container',
  templateUrl: './description-container.component.html',
  styleUrls: ['./description-container.component.css']
})
export class DescriptionContainerComponent implements OnInit {

  @Input()
  content: string;

  constructor() { }

  ngOnInit() {
  }

}
