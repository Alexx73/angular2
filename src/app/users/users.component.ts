import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  courses:any;
  employee : [];
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) {

    this.http.get<any>(this.url).subscribe(data =>
      {console.log(data);
      this.employee = data;
      console.log(this.employee);

        // for (let key in data)
        // if (data.hasOwnProperty(key))
        // console.log(key);
          // this.employee.push(data[key]);
      });

    this.courses = {
    id: '1', name:'Course 1 ',
    phone: [
      '35162599987 ',
      '3434520014 '
    ]
  }

  // this.employee = [
  //   {id:1, name:'Steve', lastName:'O Ryan'},
  //   {id:2, name:'Bryan', lastName:'Colliard'},
  //   {id:3, name:'Martin', lastName:'Dommenico'},
  // ];

    }
     
  

  ngOnInit(): void {
  }

}
