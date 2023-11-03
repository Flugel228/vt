import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideosComponent} from "./videos.component";
import {ChannelVideoComponent} from "./components/channel-video/channel-video.component";
import {VideosRoutingModule} from "./videos-routing.module";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    VideosComponent,
    ChannelVideoComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    SharedModule
  ],
  exports: [
    VideosComponent
  ]
})
export class VideosModule {
}
