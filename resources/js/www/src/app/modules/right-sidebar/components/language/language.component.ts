import { Component } from '@angular/core';
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import {RightSidebarLanguageService} from "../../services/right-sidebar-language/right-sidebar-language.service";

@Component({
  selector: 'right-sidebar-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.sass']
})
export class LanguageComponent {

  faArrowLeft = faArrowLeft
  faCheck = faCheck

  constructor(public rightSidebarLanguageService: RightSidebarLanguageService) {
  }
}
