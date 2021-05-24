import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    PostsComponent,
    UsersComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: 'users', component:UsersComponent },
      {
        path: 'posts',
        component: PostsComponent 
      },
      {
        path: 'about',
        component: AboutComponent 
      },
      {
        path: 'home',
        component: HomeComponent 
      },
      {
        path: '',
        component: HomeComponent 
      },
      {
        path: '**',
        component: NotfoundComponent 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
