import { Component } from '@angular/core';
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import {RightSidebarCountryService} from "../../services/right-sidebar-country/right-sidebar-country.service";

@Component({
  selector: 'right-sidebar-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})
export class CountryComponent {

  faArrowLeft = faArrowLeft
  faCheck = faCheck

  constructor(public rightSidebarCountryService: RightSidebarCountryService) {
  }
}
