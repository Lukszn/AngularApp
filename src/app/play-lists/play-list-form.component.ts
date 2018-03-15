import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'LS-play-list-form',
  template: `
  <div class="card">
  <div class="card-block">
    <h4 class="card-title">PlayLista</h4>
    <p class="card-text">Opis:</p>
  </div>
  <div class="card-block">
    <div class="form-group">
      <label>Nazwa:</label>
      <input type="text" [(ngModel)]="playList.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Tracks:</label>
      <input type="number" [value]="playList.tracks" disabled class="form-control">
    </div>
    <div class="form-group">
      <label>Kolor:</label>
      <input type="color" [(ngModel)]="playList.color">
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" [(ngModel)]="playList.favourite"> Ulubiona
      </label>
    </div>
    <div class="form-group">
      <button class="btn btn-success float-xs-right" (click)="save($event)">Zapisz</button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PlayListFormComponent implements OnInit {

  @Input()
  playList;

  constructor() { }

  ngOnInit() {
  }

}
