import { Component, OnInit } from '@angular/core';
import {User } from '../interfaces/user.interface';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:User[];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.getFriends(1,3);

  }

  getFriends(idS:number,idF:number){
    this.userService.getUser()
    .subscribe((user:User[]) => this.friends=user.slice(idS,idF));
  }

  redirect(friend:User){
  this.router.navigate(['/wall', friend.id]);
}

}
