import { Component } from '@angular/core';
import { faArrowLeft, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import {RightSidebarAccountService} from "../../services/right-sidebar-account/right-sidebar-account.service";

@Component({
  selector: 'right-sidebar-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.sass']
})
export class AccountsComponent {

  constructor(public rightSidebarAccountService: RightSidebarAccountService) {
  }

  faArrowLeft = faArrowLeft
  faPlus = faPlus
  faCheck = faCheck
}
