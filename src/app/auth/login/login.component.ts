import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User;

  constructor(){
    this.user = new User()
  }

  onSubmit() :void{
    console.log(this.user)
  }

}
