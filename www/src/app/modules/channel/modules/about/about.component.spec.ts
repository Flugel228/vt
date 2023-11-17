import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {Component} from "@angular/core";

describe('ChannelAboutPageComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        ChannelDescriptionComponentStub,
        ChannelAdditionalComponentStub,
        ChannelLinksComponentStub,
        ChannelStatisticsComponentStub
      ]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'channel-description',
  template: ''
})
class ChannelDescriptionComponentStub {}

@Component({
  selector: "channel-additional",
  template: ''
})
class ChannelAdditionalComponentStub {}

@Component({
  selector: "channel-links",
  template: ''
})
class ChannelLinksComponentStub {}

@Component({
  selector: "channel-statistics",
  template: ''
})
class ChannelStatisticsComponentStub {}
