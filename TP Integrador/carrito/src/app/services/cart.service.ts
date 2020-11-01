import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productList = new Array<Product>();
  constructor() { }

  add(product: Product){
    let products = this.getById( product.productId);
    if(products == null)
      this.productList.push(product);
  }

  remove(product: Product){
    let index = this.productList.indexOf(product);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
  }

  getAll(){
    return this.productList;
  }

  getById(productId: number){
    let products= this.productList.filter(product=> product.productId== productId);
    return (products.length>0) ? products[0]: null;
  }

  clear(){
    this.productList.splice(0,  this.productList.length)
  }

}
