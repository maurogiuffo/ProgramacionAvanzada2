import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main-public-dashboard',
  templateUrl: './main-public-dashboard.component.html',
  styleUrls: ['./main-public-dashboard.component.css']
})
export class MainPublicDashboardComponent implements OnInit {
  productList: Array<Product> =[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAll()
    .then(result=>{
      this.productList = result;
    })
    .catch(error => {
      console.log(error);
    });
  }

  addToCart(product: Product){
    this.cartService.add(product);
  }
  
}
