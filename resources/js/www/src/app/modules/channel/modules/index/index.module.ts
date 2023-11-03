import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from "./index.component";
import {PopularVideoComponent} from "./components/popular-video/popular-video.component";
import {IndexRoutingModule} from "./index-routing.module";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    IndexComponent,
    PopularVideoComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule {
}
