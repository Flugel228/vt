import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelStatisticsComponent } from './channel-statistics.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ChannelStatisticsComponent', () => {
  let component: ChannelStatisticsComponent;
  let fixture: ComponentFixture<ChannelStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelStatisticsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChannelStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
