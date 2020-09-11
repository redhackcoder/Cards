import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
url : string ="https://randomuser.me/api"
  constructor(private https : HttpClient) {
   }
getData(){
  return this.https.get(this.url);
}
}
