import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  pageActual:number = 1;
  posts : any [];
  url = 'https://mi-comida-api.herokuapp.com/burgers';
  url2 = 'https://restaurants-api-01.herokuapp.com/restaurants';

  constructor(private http: HttpClient) {

    
    this.http.get<any>(this.url2).subscribe(data =>
      {
        console.log(data);
      this.posts = data;
      console.log('dir:', this.posts[0].address);
      console.log('pic:', this.posts[0].pic);


        
      });

    
    
   }

  ngOnInit(): void {
  }

}
