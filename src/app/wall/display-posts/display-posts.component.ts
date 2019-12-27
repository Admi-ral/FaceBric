import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {Post} from '../../interfaces/post.interface';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent implements OnInit, OnChanges {
  @Input('createdPost') post:Post;
  posts:Post[];

  constructor() {
    this.posts = [];
  }

  ngOnInit() {}

  ngOnChanges(){
    this.posts.unshift(this.post);
  }


}
