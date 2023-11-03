import {Component} from '@angular/core';
import {IsActiveMatchOptions, Router} from "@angular/router";

@Component({
  selector: 'channel-page-navbar',
  templateUrl: './channel-page-navbar.component.html',
  styleUrls: ['./channel-page-navbar.component.sass']
})
export class ChannelPageNavbarComponent {
  constructor(private router: Router) {
  }

  isCurrentPage(pathname: string): boolean {
    const matchOptions: IsActiveMatchOptions = {
      paths: 'exact',
      matrixParams: 'exact',
      queryParams: 'subset',
      fragment: 'ignored',
    }
    return this.router.isActive(pathname, matchOptions);
  }
}
