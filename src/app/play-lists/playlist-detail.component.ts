import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'LS-playlist-detail',
  template: `
  <div class="card">
  <div class="card-block">
    <h4 class="card-title">PlayLista "{{playList.name}}"</h4>
    <p class="card-text">Wybrana PlayLista</p>
    <div class="form-group">
      <button class="btn btn-default float-xs-right" (click)="edit(playList)">Edytuj</button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Output('editplaylist')
  emitter = new EventEmitter();

  @Input()
  playList;

  edit(playList){
    this.emitter.emit(playList)
  }

  constructor() { }

  ngOnInit() {
  }

}
