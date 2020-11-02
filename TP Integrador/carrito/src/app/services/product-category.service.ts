import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/ProductCategory'
  constructor(private http: HttpClient) { }
  
  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  getById(productCategoryId: number): Promise<any>{
    console.log(this.apiURL + productCategoryId);
    return this.http.get(this.apiURL + '/' + productCategoryId)
      .toPromise();
  }

  add(productCategory: ProductCategory): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(this.apiURL, productCategory, httpOptions)
      .toPromise();
  }

  edit(productCategory: ProductCategory): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.put(this.apiURL, productCategory, httpOptions)
      .toPromise();
  }
}