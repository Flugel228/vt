import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsComponent } from './playlists.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {PlaylistComponent} from "./components/playlist/playlist.component";
import {RouterTestingModule} from "@angular/router/testing";

@Component({
  selector: 'playlist',
  template: ''
})
class PlaylistComponentStub {}

describe('ChannelPlaylistsPageComponent', () => {
  let component: PlaylistsComponent;
  let fixture: ComponentFixture<PlaylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistsComponent, PlaylistComponentStub],
    });
    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
