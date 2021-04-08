import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  posts : [];
  url = 'https://mi-comida-api.herokuapp.com/burgers';
  url2 = 'https://restaurants-api-01.herokuapp.com/restaurants';

  constructor(private http: HttpClient) {

    
    this.http.get<any>(this.url2).subscribe(data =>
      {console.log(data);
      this.posts = data;
      console.log(this.posts);

        
      });

    
    
   }

  ngOnInit(): void {
  }

}
