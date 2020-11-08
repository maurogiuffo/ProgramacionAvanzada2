import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList: Array<Product> =[];
  total: number = 0;

  constructor(private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.productList = this.cartService.getAll();
    this.total= this.calculateTotal(); 
  }

  removeProduct(product: Product){
    this.cartService.remove(product);
    this.total= this.calculateTotal(); 
  }

  confirm()
  {
    alert("confirm");
    this.cartService.clear();
    this.total = 0; 
    this.router.navigate(['/']);
  }

  calculateTotal(): number
  {
    let total =0;
    this.productList.forEach(element => {
      total+= element.price;  
    });

    return total;
  }
}
