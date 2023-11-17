import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import {Component} from "@angular/core";

describe('VideoPageComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoComponent,
        VideoPlayerComponentStub,
        TopMetadataComponentStub,
        BottomMetadataComponentStub,
        CommentsComponentStub,
        RightSideVideoComponentStub
      ]
    });
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: "video-player",
  template: ''
})
class VideoPlayerComponentStub {}

@Component({
  selector: "top-metadata",
  template: ''
})
class TopMetadataComponentStub {}

@Component({
  selector: "bottom-metadata",
  template: ''
})
class BottomMetadataComponentStub {}

@Component({
  selector: "comments",
  template: ''
})
class CommentsComponentStub {}

@Component({
  selector: "right-side-video",
  template: ''
})
class RightSideVideoComponentStub {}
