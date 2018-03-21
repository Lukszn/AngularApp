import { Component, OnInit, Inject } from '@angular/core';
import { PlayListsService } from './play-lists.service';

@Component({
  selector: 'LS-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.css']
})
export class PlayListsComponent implements OnInit {

  

  constructor(public playListsService:PlayListsService) {
    this.playLists = this.playListsService.getPlayLists();
   }
  
    ngOnInit() {
    }

  selected = null;

  edited = {

  }

  mode = "none";

  playLists = []

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
    var newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    this.mode = "edit";
    this.selected = newPlaylist;
    this.edited = Object.assign({}, newPlaylist);
  }

  getPlaylistStyle(playList) {
    return {
      borderBottomColor: playList.color,
      borderBottomWidth: '4px'
    }
  }

  save(playList) {
    if (playList.id) {
      let index = this.playLists.findIndex((old_playList)=>(
        old_playList.id === playList.id
      ))
      this.playLists.splice(index,1,playList)
    } else {
      playList.id = Date.now();
      this.playLists.push(playList);
    }
  }
  counter = 0;
  counter2 = 0;


  
}
