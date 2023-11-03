import { Component } from '@angular/core';
import {faShare} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'channel-statistics',
  templateUrl: './channel-statistics.component.html',
  styleUrls: ['./channel-statistics.component.sass']
})
export class ChannelStatisticsComponent {
  faShare = faShare
}
