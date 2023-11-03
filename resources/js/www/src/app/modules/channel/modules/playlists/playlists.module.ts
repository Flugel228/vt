import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaylistsComponent} from "./playlists.component";
import {PlaylistComponent} from "./components/playlist/playlist.component";
import {PlaylistsRoutingModule} from "./playlists-routing.module";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    SharedModule
  ],
  exports: [
    PlaylistsComponent
  ]
})
export class PlaylistsModule {
}
