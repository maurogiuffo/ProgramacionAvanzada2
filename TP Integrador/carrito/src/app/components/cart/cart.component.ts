import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isLogged:boolean = false;
  productList: Array<Product> =[];
  total: number = 0;

  constructor(private cartService: CartService,private userService: UserService) { }

  ngOnInit(): void {
    this.productList = this.cartService.getAll();
    this.total= this.calculateTotal(); 
  
    this.isLogged = this.userService.isLogged();
  }

  loggedEvent()
  {
    this.isLogged = this.userService.isLogged();
  }

  removeProduct(product: Product){
    this.cartService.remove(product);
    this.total= this.calculateTotal(); 
  }

  confirm()
  {
    alert("confirm")
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
