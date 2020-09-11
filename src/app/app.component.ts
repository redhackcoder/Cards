import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cardAngular';
  user;
  constructor(private User: UserService, ){}
  ngOnInit(){
    this.User.getData().subscribe(
      (user: any)=>{
        this.user = user.results[0];
        console.log(this.user)
      },
      // (err)=>{
      //   this.toast.error(err.status, "OOPs")
      // }
    )
  }
}
