import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  // providers: [PostService],
})
export class PostListComponent {
  postList: Array<any> = [];

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }
}
