import { from } from 'rxjs';
import { Component, OnInit , Input} from '@angular/core';
import {faDatabase,faEnvelope,faMapMarkedAlt,faPhone
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() user;
faDatabase=faDatabase
faMapMarkedAlt=faMapMarkedAlt
faPhone=faPhone
faEnvelope=faEnvelope
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.user)
  }

}
