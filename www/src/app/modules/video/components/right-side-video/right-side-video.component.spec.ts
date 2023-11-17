import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideVideoComponent } from './right-side-video.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TrimPipe} from "../../../shared/pipes/trim.pipe";


describe('RightSideVideoComponent', () => {
  let component: RightSideVideoComponent;
  let fixture: ComponentFixture<RightSideVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RightSideVideoComponent,
        TrimPipe
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(RightSideVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
