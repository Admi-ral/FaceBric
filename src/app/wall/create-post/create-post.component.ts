import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Post} from '../../interfaces/post.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post:Post;
  @Output() public postEvent = new EventEmitter<Post>();

  constructor() {
    this.post={content:'', image:''};
  }

  ngOnInit() {}

  clearContent(){
    this.post.content = '';
  }

  clearImage(){
    this.post.image = '';
  }

  onSubmit(){
    let post:Post;
    post = Object.assign({},this.post);
    this.clearContent();
    this.clearImage();
    this.postEvent.emit(post);
  }

}
