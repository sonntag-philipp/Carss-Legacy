import { Injectable } from '@angular/core';



class RestConstants {
  public address = "http://localhost:3000";
}









@Injectable()
export class GlobalsService {
  public rest = new RestConstants();
}
