import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideVideoComponent } from './right-side-video.component';

describe('RightSideVideoComponent', () => {
  let component: RightSideVideoComponent;
  let fixture: ComponentFixture<RightSideVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideVideoComponent]
    });
    fixture = TestBed.createComponent(RightSideVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
