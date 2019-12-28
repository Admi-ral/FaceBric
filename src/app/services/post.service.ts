import { Injectable } from '@angular/core';

import {Post} from '../interfaces/post.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private post:Post;
  private postObservable:BehaviorSubject<Post>;

  constructor() {
    this.post ={content:'', image:''};
  }

  addPost(post:Post){
    Object.assign(this.post, post);
    this.postObservable.next(this.post);
  }

  getPost():Observable<Post>{
    return this.postObservable.asObservable();
  }

}
