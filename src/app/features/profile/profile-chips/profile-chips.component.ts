import {Component, Input, OnInit} from '@angular/core';
import {ChipModel} from '../../../shared/models/chip.model';

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
