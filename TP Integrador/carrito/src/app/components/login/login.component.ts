import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  email : string;
  password : string;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.email,this.password)
      .then(result=>{
        this.isLogged= this.userService.isLogged();
      })
      .catch(error =>{
      })
  }

  logout()
  {
    this.userService.logout();
    this.isLogged = false;
  }


}
