import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosComponent } from './videos.component';
import {Component} from "@angular/core";

@Component({
  selector: "channel-video",
  template: ""
})
class ChannelVideoComponentStub {}

describe('ChannelVideosPageComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosComponent, ChannelVideoComponentStub]
    });
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
