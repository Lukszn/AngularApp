import { Injectable } from '@angular/core';

@Injectable()
export class PlayListsService {

  playLists = [
    {
      id: 2,
      name: 'Hip-Hop Gratest Hits',
      tracks: 23,
      color: '#0000FF',
      favourite: false,
    },
    {
      id: 1,
      name: 'The best of LS',
      tracks: 21,
      color: '#FF0000',
      favourite: true,
    }
  ]

  getPlayLists(){
    return this.playLists;
  }

  constructor() { }

}
