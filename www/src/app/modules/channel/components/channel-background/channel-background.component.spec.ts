import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBackgroundComponent } from './channel-background.component';

describe('ChannelBackgroundComponent', () => {
  let component: ChannelBackgroundComponent;
  let fixture: ComponentFixture<ChannelBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelBackgroundComponent]
    });
    fixture = TestBed.createComponent(ChannelBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
