import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import {Component} from "@angular/core";

@Component({
  selector: 'comment',
  template: '',
})
class CommentComponentStub {}

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsComponent, CommentComponentStub]
    });
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
