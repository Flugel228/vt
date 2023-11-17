import { Component } from '@angular/core';
import { SidebarService } from "../../services/sidebar.service";
import { faMagnifyingGlass, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faBell as faBellRegular, faCirclePlay as faCirclePlayRegular } from "@fortawesome/free-regular-svg-icons"
import {RightSidebarService} from "../../modules/right-sidebar/services/right-sidebar/right-sidebar.service";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faCirclePlayRegular = faCirclePlayRegular
  faBellRegular = faBellRegular
  faMagnifyingGlass = faMagnifyingGlass

  constructor(
    public sidebarService: SidebarService,
    public rightSidebarService: RightSidebarService
  ) {
  }
}
