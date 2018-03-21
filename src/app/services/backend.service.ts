import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }


  public getResource(path: string, id: string, embed: string[], fields: string[]) {

  }
}
