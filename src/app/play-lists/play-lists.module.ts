import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PlayListsComponent } from './play-lists.component';
import { ContentCardComponent } from './content-card.component';
import { PlayListFormComponent } from './play-list-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlayListsService } from './play-lists.service';

import playListsData from './play-lists.data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlayListsComponent,

    ContentCardComponent,
    PlayListFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports: [
    PlayListsComponent
  ],

  providers:[
    // {provide: PlayListsService, useClass: PlayListsService//lub inna klasa ktora rozszerza PlayListsService}
    PlayListsService,
    {provide: 'PlayListsData', useValue: playListsData},
    // {provide: 'PlayListsData', useFactory: (data)=>{
    //   data.push({id:3, name:'Test', color:'red', favourite:'false', tracks:'16'})
    //   return data;
    // }, deps:['PlayListsExampleData']}
  ]
})
export class PlayListsModule { }
