import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {RightSidebarService} from "../right-sidebar/right-sidebar.service";

@Injectable({
  providedIn: 'root'
})
export class RightSidebarCountryService {
  private isVisible$ = new BehaviorSubject<boolean>(false)

  constructor(private rightSidebarService: RightSidebarService) {
  }

  open() {
    this.rightSidebarService.close()
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false);
  }

  back() {
    this.isVisible$.next(false)
    this.rightSidebarService.open()
  }

  get isVisible(): BehaviorSubject<boolean> {
    return this.isVisible$
  }
}
