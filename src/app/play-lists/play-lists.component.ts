import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LS-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.css']
})
export class PlayListsComponent implements OnInit {

  selected = null;
  
    edited = {
  
    }
  
    mode = "none";
  
    playLists = [
      {
        name: 'Hip-Hop Gratest Hits',
        tracks: 23,
        color: '#0000FF',
        favourite: false,
      },
      {
        name: 'The best of LS',
        tracks: 21,
        color: '#FF0000',
        favourite: true,
      }
    ]
  
    select(playList) {
      if(playList !== this.selected)
      this.mode = "selected";
      this.selected = playList;
    }
  
    edit(playList) {
      this.mode = "edit";
      this.edited = playList;
      this.selected = playList;
    }
  
    createNew() {
      var newPlaylist = {};
      this.mode = "edit";
      this.selected = newPlaylist;
      this.edited = newPlaylist;
    }
  
    getPlaylistStyle(playList) {
      return {
        borderBottomColor: playList.color,
        borderBottomWidth: '4px'
      }
    }
  
    save(event) {
      console.log("zapisano", event)
    }
    counter = 0;
    counter2 = 0;
  

  constructor() { }

  ngOnInit() {
  }

}
