import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/User'
  
  private user: User = null;

  constructor(private http: HttpClient) { }

  isLogged()
  {
    return this.user != null;
  }

  logout(){
    this.user=null;
  }

  login(mail: string, password: string)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    let user : User = new User();
    
    user.email = mail;
    user.password= password;

    return this.http.post(this.apiURL + '/login', user, httpOptions)
      .toPromise<any>()
      .then(result => { 
        this.user = result;
      })
      .catch();

  }
}
