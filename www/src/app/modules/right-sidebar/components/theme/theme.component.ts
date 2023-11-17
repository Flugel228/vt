import { Component } from '@angular/core';
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import {RightSidebarThemeService} from "../../services/right-sidebar-theme/right-sidebar-theme.service";

@Component({
  selector: 'right-sidebar-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.sass']
})
export class ThemeComponent {

  faArrowLeft = faArrowLeft
  faCheck = faCheck

  constructor(public rightSidebarThemeService: RightSidebarThemeService) {
  }
}
