import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-chips',
  templateUrl: './profile-chips.component.html',
  styleUrls: ['./profile-chips.component.css']
})
export class ProfileChipsComponent implements OnInit {

  @Input() userChips: string[];
  @Input() systemChips: string[];

  constructor() { }

  ngOnInit() {
  }

}
