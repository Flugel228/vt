import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelVideoComponent } from './channel-video.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('ChannelVideoComponent', () => {
  let component: ChannelVideoComponent;
  let fixture: ComponentFixture<ChannelVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelVideoComponent],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(ChannelVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
