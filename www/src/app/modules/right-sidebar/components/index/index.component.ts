import { Component } from '@angular/core';
import {
  faUsersRectangle,
  faRightFromBracket,
  faMicrophoneLines,
  faAngleRight,
  faLanguage,
  faGlobe,
  faGear,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import {
  faMoon,
  faMessage
} from "@fortawesome/free-regular-svg-icons";
import {RightSidebarService} from "../../services/right-sidebar/right-sidebar.service";
import {RightSidebarAccountService} from "../../services/right-sidebar-account/right-sidebar-account.service";
import {RightSidebarThemeService} from "../../services/right-sidebar-theme/right-sidebar-theme.service";
import {RightSidebarLanguageService} from "../../services/right-sidebar-language/right-sidebar-language.service";
import {RightSidebarCountryService} from "../../services/right-sidebar-country/right-sidebar-country.service";


@Component({
  selector: 'right-sidebar-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent {

  constructor(
    public rightSidebarService: RightSidebarService,
    public rightSidebarAccountService: RightSidebarAccountService,
    public rightSidebarThemeService: RightSidebarThemeService,
    public rightSidebarLanguageService: RightSidebarLanguageService,
    public rightSidebarCountryService: RightSidebarCountryService
  ) {
  }

  faUsersRectangle = faUsersRectangle
  faRightFromBracket = faRightFromBracket
  faMicrophoneLines = faMicrophoneLines
  faMoon = faMoon
  faAngleRight = faAngleRight
  faLanguage = faLanguage
  faGlobe = faGlobe
  faGear = faGear
  faMessage = faMessage
  faQuestion = faQuestion
}
