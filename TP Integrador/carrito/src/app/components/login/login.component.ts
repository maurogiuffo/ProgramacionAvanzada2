import { Component, OnInit ,EventEmitter, Input, Output} from '@angular/core';
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


  @Output()
  loggedEvent = new EventEmitter<boolean>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLogged= this.userService.isLogged();
  }

  login(){
    this.userService.login(this.email,this.password)
      .then(result=>{
        this.isLogged= this.userService.isLogged();
        this.loggedEvent.emit();
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
