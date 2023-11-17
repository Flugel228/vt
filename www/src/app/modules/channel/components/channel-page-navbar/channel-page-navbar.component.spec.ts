import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPageNavbarComponent } from './channel-page-navbar.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('ChannelPageNavbarComponent', () => {
  let component: ChannelPageNavbarComponent;
  let fixture: ComponentFixture<ChannelPageNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelPageNavbarComponent],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(ChannelPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
