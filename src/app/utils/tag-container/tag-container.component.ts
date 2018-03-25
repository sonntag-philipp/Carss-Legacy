import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TagModel } from '../../models/tag.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { BackendService } from '../../backend/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'carss-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.css']
})
export class TagContainerComponent implements OnInit {
  @Input() tags: TagModel[];
  @Output() tagsChange: EventEmitter<TagModel[]> = new EventEmitter<TagModel[]>();

  @Input() offline: boolean;
  @Input() id: string;
  @Input() type: string;

  public mouseOver = false;

  constructor(
    private dialog: MatDialog,
    private backend: BackendService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }



  ngOnInit() { }

  public searchTag(name: string): void {
    this.router.navigate(["/ride", "search", name]);
  }

  public addTag(): void {
    this.dialog.open(InputDialogComponent, {
      data: {
        title: "Neuer Tag",
        button: "Hinzufügen",
        placeholder: "Name des Tags"
      },
      panelClass: "carss-dialog-padding"
    }).afterClosed().subscribe(
      name => {
        if (name === undefined) {
          return;
        }
        if (name.trim() === "") {
          return;
        }

        if (!this.offline) {
          this.postTag(name);
        } else {
          this.tags.push({name: name});
        }
      }
    );
  }

  private postTag(name: string) {
    this.backend.chainNoun(this.type).chainVerb(this.id).chainNoun<TagModel>("tags").post({
      name: name
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

}
