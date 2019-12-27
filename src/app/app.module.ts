import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import {UserService} from './services/user.service';
import { CreatePostComponent } from './wall/create-post/create-post.component';
import { DisplayPostsComponent } from './wall/display-posts/display-posts.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    CreatePostComponent,
    DisplayPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
