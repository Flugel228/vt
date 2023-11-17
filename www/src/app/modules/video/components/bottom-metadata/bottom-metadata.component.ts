import { Component } from '@angular/core';
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'bottom-metadata',
  templateUrl: './bottom-metadata.component.html',
  styleUrls: ['./bottom-metadata.component.sass']
})
export class BottomMetadataComponent {
  private _isExpanded: boolean = false
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp

  toggleDescription(): void {
    this._isExpanded = !this._isExpanded
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }
}
