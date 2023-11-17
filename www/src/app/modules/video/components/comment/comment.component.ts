import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent {
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
}
