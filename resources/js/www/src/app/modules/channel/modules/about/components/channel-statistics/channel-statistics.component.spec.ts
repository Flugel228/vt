import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelStatisticsComponent } from './channel-statistics.component';

describe('ChannelStatisticsComponent', () => {
  let component: ChannelStatisticsComponent;
  let fixture: ComponentFixture<ChannelStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelStatisticsComponent]
    });
    fixture = TestBed.createComponent(ChannelStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
