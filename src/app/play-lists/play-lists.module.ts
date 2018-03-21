import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { PlayListsComponent } from './play-lists.component';
import { ContentCardComponent } from './content-card.component';
import { PlayListFormComponent } from './play-list-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlayListsService } from './play-lists.service';

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
    PlayListsService
  ]
})
export class PlayListsModule { }
