import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton.component';
import { NavigationComponent } from './layout/navigation.component';
import { FooterComponent } from './layout/footer.component';
import { ContentComponent } from './layout/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
