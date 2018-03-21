import { Injectable, Inject, Optional } from '@angular/core';

@Injectable()
export class PlayListsService {

  constructor(@Optional() @Inject('PlayListsData') playListsData) {
    this.playLists = playListsData === null ? this.playLists : playListsData;
   }

  playLists = [ ]

  savePlayList(playList) {
    if (playList.id) {
      let index = this.playLists.findIndex((old_playList) => (
        old_playList.id === playList.id
      ))
      this.playLists.splice(index, 1, playList)
    } else {
      playList.id = Date.now();
      this.playLists.push(playList);
    }
  }

  createPlayList() {
    var newPlayList = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    return Object.assign({}, newPlayList);
  }

  getPlayLists() {
    return this.playLists;
  }

}
