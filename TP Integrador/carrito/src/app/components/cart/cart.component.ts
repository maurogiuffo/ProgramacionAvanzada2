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

  constructor(private cartService: CartService,private userService: UserService) { }

  ngOnInit(): void {
    this.productList = this.cartService.getAll();
    this.isLogged = this.userService.isLogged();
  }

  loggedEvent()
  {
    this.isLogged = this.userService.isLogged();
  }

  removeProduct(product: Product){
    this.cartService.remove(product);
  }

  confirm()
  {
    alert("confirm")
  }
}
