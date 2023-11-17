import { Component } from '@angular/core';
import {RightSidebarService} from "./modules/right-sidebar/services/right-sidebar/right-sidebar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public rightSidebarService: RightSidebarService) {
  }
  title = 'angular';
}
