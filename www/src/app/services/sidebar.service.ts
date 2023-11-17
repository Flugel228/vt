import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isVisible$ = new BehaviorSubject<boolean>(false)
  private openSections: string[] = []

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }

  toggleSection(section: string) {
    if (this.openSections.includes(section)) {
      this.openSections = this.openSections.filter(s => s !== section)
    } else {
      this.openSections.push(section)
    }
  }

  get isVisible(): BehaviorSubject<boolean> {
    return this.isVisible$
  }

  openSectionsIncludes(search: string): boolean {
    return this.openSections.includes(search)
  }
}
