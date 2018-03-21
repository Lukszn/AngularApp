import { Component, OnInit, Inject } from '@angular/core';
import { PlayListsService } from './play-lists.service';

import playListsData from './play-lists.data';

@Component({
  selector: 'LS-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.css'],
  providers: [
    PlayListsService,
    {provide: 'PlayListsData', useValue: playListsData},
  ]

})
export class PlayListsComponent implements OnInit {


  constructor(private playListsService: PlayListsService) {
  }

  playLists = []

  ngOnInit() {
    this.playLists = this.playListsService.getPlayLists();
  }

  selected = null;

  edited = {}

  mode = "none";

  select(playList) {
    if (playList !== this.selected)
    this.mode = "selected";
    this.selected = playList;
  }

  edit(playList) {
    this.mode = "edit";
    this.edited = Object.assign({}, playList);
    this.selected = playList;
  }

  createNew() {
    this.mode = "edit";
    let newPlayList = this.playListsService.createPlayList()
    this.selected = newPlayList;
    this.edited = newPlayList;
  }

  getPlaylistStyle(playList) {
    return {
      borderBottomColor: playList.color,
      borderBottomWidth: '4px'
    }
  }

  save(playList) {
    this.playListsService.savePlayList(playList);
  }

}
