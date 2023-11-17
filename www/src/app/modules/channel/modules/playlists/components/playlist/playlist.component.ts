import { Component } from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent {
  faBars = faBars
}
