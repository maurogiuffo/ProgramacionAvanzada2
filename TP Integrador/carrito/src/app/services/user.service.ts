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

  
  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

}
