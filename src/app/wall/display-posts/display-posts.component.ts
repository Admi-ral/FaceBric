import { Component, OnInit, OnChanges, Input} from '@angular/core';

import {Post} from '../../interfaces/post.interface';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent implements OnInit, OnChanges {
  posts:Post[];
  @Input('postPassed') post:Post;

  constructor() {
    this.posts = new Array<Post>();
  }

  ngOnInit() {}

  ngOnChanges(){
    console.log(this.post);
    this.posts.unshift(Object.assign({},this.post));
  }


}
