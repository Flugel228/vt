import { Component } from '@angular/core';
import {faUser, faClock} from "@fortawesome/free-regular-svg-icons"
import {faClockRotateLeft, faThumbsUp, faBars, faFire, faMusic, faGamepad, faTrophy, faAngleDown, faAngleUp, faHouse} from "@fortawesome/free-solid-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  faUser = faUser
  faClockRotateLeft = faClockRotateLeft
  faYoutube = faYoutube
  faClock = faClock
  faThumbsUp = faThumbsUp
  faBars = faBars
  faFire = faFire
  faMusic = faMusic
  faGamepad = faGamepad
  faTrophy = faTrophy
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
  faHouse = faHouse

  constructor(public sidebarService: SidebarService) {
  }
}
