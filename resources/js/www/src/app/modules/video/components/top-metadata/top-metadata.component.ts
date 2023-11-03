import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faShare, faBars, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'top-metadata',
  templateUrl: './top-metadata.component.html',
  styleUrls: ['./top-metadata.component.sass']
})
export class TopMetadataComponent {
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
  faShare = faShare
  faBars = faBars
  faPlus = faPlus
}
