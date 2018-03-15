import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'LS-playlists-list',
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th> # </th>
      <th> Nazwa </th>
      <th> Utworów </th>
      <th> Ulubiona </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let playList of playLists; let i = index" class="playList-row" [ngClass]="{'table-active': selected == playList}"
      [ngStyle]="{borderBottomColor:playList.color}" (click)="select(playList)">
      <td> {{i+1}}. </td>
      <td> {{playList.name}} </td>
      <td> {{playList.tracks}} </td>
      <td>
        <label>
          <input type="checkbox" [(ngModel)]="playList.favourite" (click)="$event.stopPropagation();"> Ulubiona
        </label>
      </td>
    </tr>
  </tbody>
  </table>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter()

  @Input()
  playLists;

  @Input()
  selected

  select(playList){
    this.onSelected.emit(playList)
  }

  constructor() { }

  ngOnInit() {
  }

}
