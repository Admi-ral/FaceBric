import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/user.interface';
import {UserService} from '../services/user.service';
import {Post} from '../interfaces/post.interface';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  post:Post;

  user:User;

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.getUser(0);
  }

  getUser(id:number){
    this.userService.getUser()
    .subscribe((user:User[]) => this.user=user[id]);
  }

}
