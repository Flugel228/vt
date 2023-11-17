import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about.component";
import {ChannelAdditionalComponent} from "./components/channel-additional/channel-additional.component";
import {ChannelDescriptionComponent} from "./components/channel-description/channel-description.component";
import {ChannelLinksComponent} from "./components/channel-links/channel-links.component";
import {ChannelStatisticsComponent} from "./components/channel-statistics/channel-statistics.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AboutRoutingModule} from "./about-routing.module";



@NgModule({
  declarations: [
    AboutComponent,
    ChannelAdditionalComponent,
    ChannelDescriptionComponent,
    ChannelLinksComponent,
    ChannelStatisticsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
