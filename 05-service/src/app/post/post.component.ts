import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService],
})
export class PostComponent {
  posts: Array<any> = [];

  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }

  addNew() {
    let newPost: Post = {
      id: 6,
      postTitle: 'Post 6',
    };
    this.postService.addPost(newPost);
  }
}
