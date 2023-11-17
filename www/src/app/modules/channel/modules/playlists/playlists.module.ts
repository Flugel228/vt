import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaylistsComponent} from "./playlists.component";
import {PlaylistComponent} from "./components/playlist/playlist.component";
import {PlaylistsRoutingModule} from "./playlists-routing.module";
import {SharedModule} from "../../../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent
  ],
    imports: [
        CommonModule,
        PlaylistsRoutingModule,
        SharedModule,
        FontAwesomeModule
    ],
  exports: [
    PlaylistsComponent
  ]
})
export class PlaylistsModule {
}
