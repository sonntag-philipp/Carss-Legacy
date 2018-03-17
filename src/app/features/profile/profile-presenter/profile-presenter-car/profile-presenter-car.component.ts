import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from '../../../../shared/models/car.model';

@Component({
  selector: 'app-profile-presenter-car',
  templateUrl: './profile-presenter-car.component.html',
  styleUrls: ['./profile-presenter-car.component.css']
})
export class ProfilePresenterCarComponent implements OnInit {

  @Input()
  car: CarModel;

  constructor() { }

  ngOnInit() {
  }
}
