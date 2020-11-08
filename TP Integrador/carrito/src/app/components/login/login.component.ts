import { Component, OnInit ,EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserCredentials } from 'src/app/models/user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   loginFormGroup : FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  onSubmit(){
    let userCredentials = new UserCredentials();
    userCredentials.email = this.loginFormGroup.get('email').value;
    userCredentials.password = this.loginFormGroup.get('password').value;

    this.authService.login(userCredentials).subscribe(
      response => {    
        if (this.authService.token) {
          let redirect = this.authService.redirectUrl 
          ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';
          
          this.router.navigateByUrl(redirect);
        }
      },
    error => {
      
    });
  }

  logout()
  {
    this.authService.logout();

    setTimeout(() => {
      this.router.navigateByUrl('/login');      
    }, 2000);      
  }
}
