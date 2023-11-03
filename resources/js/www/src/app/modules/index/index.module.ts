import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from "./index.component"
import {IndexRoutingModule} from "./index-routing.module";
import {VideoCardComponent} from "./components/video-card/video-card.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    IndexComponent,
    VideoCardComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule
  ]
})
export class IndexModule {
}
