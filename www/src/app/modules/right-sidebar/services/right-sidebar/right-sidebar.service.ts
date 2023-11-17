import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RightSidebarService {
  private isVisible$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }

  get isVisible(): BehaviorSubject<boolean> {
    return this.isVisible$
  }
}
