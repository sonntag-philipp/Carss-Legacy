import { Component, Input, OnInit } from '@angular/core';
import { TagModel } from '../../models/tag.model';
import { MatDialog } from '@angular/material';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'carss-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.css']
})
export class TagContainerComponent implements OnInit {

  @Input()
  tags: TagModel[];

  @Input()
  id: string;

  @Input()
  type: string;

  @Input()
  showCreators: boolean;

  public mouseOver = false;

  constructor(
    private dialog: MatDialog,
    private backend: BackendService
  ) { }



  ngOnInit() { }

  public addTag(): void {
    this.dialog.open(InputDialogComponent, {
      data: {
        title: "Neuer Tag",
        button: "Hinzufügen"
      }
    }).afterClosed().subscribe(
      next => {
        if (next === undefined) {
          return;
        }
        this.backend.noun(this.type).verb(this.id).noun("tags").post({
          name: next
        }).subscribe(
          next => {
            this.tags.push(next.body);
          }
        );
      }
    );
  }

}
