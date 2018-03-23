import { Component, Input, OnInit } from '@angular/core';
import { TagModel } from '../../models/tag.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { BackendService } from '../../backend/backend.service';

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
    private backend: BackendService,
    private snackBar: MatSnackBar
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
        this.backend.chainNoun(this.type).chainVerb(this.id).chainNoun("tags").post<TagModel>({
          name: next,
          creator_id: null,
          id: null,
          creation: null,
          user_id: null
        }).subscribe(
          next => {
            if (next.status !== 201) {
              this.snackBar.open("Tag konnte nicht erstellt werden!", "Okay");
            } else {
              this.tags.push(next.body);
            }
          }
        );
      }
    );
  }

}
