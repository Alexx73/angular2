import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit {

  @Input() id = '';
  @Input() name = '';
  @Input() avatar ='';
  @Input() email = '';

  constructor(  ) { 

    

}

ngOnInit(): void {
}

}