import { Injectable } from '@angular/core';



class RestConstants {
  public address = "https://api.phildev.me";
}









@Injectable()
export class GlobalsService {
  public rest = new RestConstants();
}
