import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-settings-accounts',
  templateUrl: './dashboard-settings-accounts.component.html',
  styleUrls: ['./dashboard-settings-accounts.component.css']
})
export class DashboardSettingsAccountsComponent implements OnInit {

  public input: string;

  constructor() { }

  ngOnInit() {
  }

  public onIServSubmitted(form: any) {
    console.log(this.input);
    console.log(form);
  }
}
