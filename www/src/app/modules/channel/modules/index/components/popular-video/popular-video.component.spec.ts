import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularVideoComponent } from './popular-video.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('PopularVideoComponent', () => {
  let component: PopularVideoComponent;
  let fixture: ComponentFixture<PopularVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PopularVideoComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(PopularVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
