import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton.component';
import { NavigationComponent } from './layout/navigation.component';
import { FooterComponent } from './layout/footer.component';
import { ContentComponent } from './layout/content.component';
import { RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent,
    NotfoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'users', component:UsersComponent },
      {
        path: '',
        component: SkeletonComponent 
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
