import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product>;
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().then(result=>{
      this.productList = result;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
