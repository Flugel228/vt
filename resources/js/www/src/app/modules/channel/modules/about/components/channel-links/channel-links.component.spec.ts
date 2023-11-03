import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelLinksComponent } from './channel-links.component';

describe('ChannelLinksComponent', () => {
  let component: ChannelLinksComponent;
  let fixture: ComponentFixture<ChannelLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelLinksComponent]
    });
    fixture = TestBed.createComponent(ChannelLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
