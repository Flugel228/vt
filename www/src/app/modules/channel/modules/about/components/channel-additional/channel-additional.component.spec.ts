import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAdditionalComponent } from './channel-additional.component';

describe('ChannelAdditionalComponent', () => {
  let component: ChannelAdditionalComponent;
  let fixture: ComponentFixture<ChannelAdditionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelAdditionalComponent]
    });
    fixture = TestBed.createComponent(ChannelAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
