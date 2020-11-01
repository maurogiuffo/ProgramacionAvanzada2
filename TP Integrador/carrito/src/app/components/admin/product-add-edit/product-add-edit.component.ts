import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
  product: Product= null; 
  title: string;

  constructor( private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let param= this.route.snapshot.paramMap.get('id');
    if(param== undefined || param== null || param == ""){
      this.title = "Add";
      return;
    }

    this.title = "Edit";
    let productId = Number(param);

    this.productService.getById(productId)
    .then(result=>{
      this.product = result;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
