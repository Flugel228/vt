import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelComponent } from './channel.component';
import {Component} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChannelComponent,
        ChannelBackgroundComponentStub,
        ChannelPageNavbarComponentStub
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: "channel-background",
  template: ''
})
class ChannelBackgroundComponentStub {}

@Component({
  selector: "channel-page-navbar",
  template: ''
})
class ChannelPageNavbarComponentStub {}
