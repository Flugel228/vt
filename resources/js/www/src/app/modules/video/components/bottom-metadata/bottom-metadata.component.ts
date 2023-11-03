import { Component } from '@angular/core';
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'bottom-metadata',
  templateUrl: './bottom-metadata.component.html',
  styleUrls: ['./bottom-metadata.component.sass']
})
export class BottomMetadataComponent {
  isExpanded: boolean = false

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded
  }

  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
}
