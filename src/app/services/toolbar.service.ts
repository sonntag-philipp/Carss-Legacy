import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ToolbarService {

  constructor(
    public auth: AngularFireAuth
  ) { }

  public title: string;
  public hidden = false;
}
