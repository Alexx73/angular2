import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

url1 = 'https://reqres.in/api/users?page=2';
respuesta: any = [];
id = '';
avatar = '';
name = '';
email = '';
personas: any = [];

  constructor( private http: HttpClient ) {

    this.http.get(this.url1).toPromise().then(data => {

      // console.log(data);
          this.personas = data;
      
          this.personas = this.personas.data
      
      
          this.name = this.personas[0].first_name + ' ' + this.personas[0].last_name ;
          this.email = this.personas[0].email;
          this.id = this.personas[0].id;
          this.avatar = this.personas[0].avatar;
      
      
      //    DATOS A LA CONSOLA
          console.log('personas', this.personas);
          console.log('name: ', this.name, 'id: ', this.id);
          console.log('email: ', this.personas[0].email);
          console.log('avatar: ', this.avatar);
      
      
          // console.log('id', personas[0].id);
      
          // this.id = this.respuesta.data[0].id;
          // this.avatar = this.respuesta.data[0].avatar;
          // this.name = this.respuesta.data[0].first_name + ' ' + this.respuesta.data[0].last_name ;
          // this.email = this.respuesta.data[0].email
      
          // console.log('id :', this.id, );
          // console.log('avatar: ', this.avatar);
          // console.log('name: ', this.name);
          // console.log('email: ', this.email );
          // console.log(data[0].email);
        } )

    
   }

  



  ngOnInit(): void {

    
  }

}
