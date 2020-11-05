import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/Product'
  constructor(private http: HttpClient) { }
  
  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  getById(productId: number): Promise<any>{
    return this.http.get(this.apiURL + '/' + productId)
      .toPromise();
  }

  add(product: Product): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(this.apiURL, product, httpOptions)
      .toPromise();
  }

  edit(product: Product): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.put(this.apiURL, product, httpOptions)
      .toPromise();
  }
}