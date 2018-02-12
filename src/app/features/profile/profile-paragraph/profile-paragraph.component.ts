import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-paragraph',
  templateUrl: './profile-paragraph.component.html',
  styleUrls: ['./profile-paragraph.component.css']
})
export class ProfileParagraphComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
