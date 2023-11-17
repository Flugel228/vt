import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BottomMetadataComponent} from "./components/bottom-metadata/bottom-metadata.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {TopMetadataComponent} from "./components/top-metadata/top-metadata.component";
import {RightSideVideoComponent} from "./components/right-side-video/right-side-video.component";
import {VideoPlayerComponent} from "./components/video-player/video-player.component";
import {VideoRoutingModule} from "./video-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {VideoComponent} from "./video.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    BottomMetadataComponent,
    CommentComponent,
    CommentsComponent,
    RightSideVideoComponent,
    TopMetadataComponent,
    VideoPlayerComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class VideoModule { }
