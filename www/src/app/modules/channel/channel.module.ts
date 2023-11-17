import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChannelComponent} from "./channel.component";
import {ChannelBackgroundComponent} from "./components/channel-background/channel-background.component";
import {ChannelPageNavbarComponent} from "./components/channel-page-navbar/channel-page-navbar.component";
import {ChannelRoutingModule} from "./channel-routing.module";


@NgModule({
  declarations: [
    ChannelComponent,
    ChannelBackgroundComponent,
    ChannelPageNavbarComponent
  ],
  imports: [
    CommonModule,
    ChannelRoutingModule
  ],
  exports: [
    ChannelComponent
  ]
})
export class ChannelModule {
}
