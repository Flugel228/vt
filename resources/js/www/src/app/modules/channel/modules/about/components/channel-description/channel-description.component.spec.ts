import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDescriptionComponent } from './channel-description.component';

describe('ChannelDescriptionComponent', () => {
  let component: ChannelDescriptionComponent;
  let fixture: ComponentFixture<ChannelDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelDescriptionComponent]
    });
    fixture = TestBed.createComponent(ChannelDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
