import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-friend-wall',
  templateUrl: './friend-wall.component.html',
  styleUrls: ['./friend-wall.component.css']
})
export class FriendWallComponent implements OnInit {
  id:number;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap
        .subscribe((params: ParamMap)=>{
          this.id = parseInt(params.get('id'));
        });

      this.userService.getUser()
      .subscribe((user:User[]) => this.user = user[this.id]);
          }
  }
