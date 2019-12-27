import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WallComponent} from './wall/wall.component';
import {FriendsComponent} from './friends/friends.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FriendWallComponent } from './friends/friend-wall//friend-wall.component';


const routes: Routes = [
  {path:'', redirectTo:'/wall', pathMatch:'full'},
  {path:'wall', component: WallComponent},
  {path:'wall/:id', component: FriendWallComponent},
  {path:'friends', component: FriendsComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
WallComponent,
FriendsComponent,
PageNotFoundComponent,
FriendWallComponent
];
