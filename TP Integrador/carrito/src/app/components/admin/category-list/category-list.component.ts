import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  productCategoryList: Array<ProductCategory> = null;

  constructor(private productCategoryService : ProductCategoryService ) { }

  ngOnInit(): void {
    this.productCategoryService.getAll()
    .then(result=>{
      this.productCategoryList = result;
    })
    .catch(error => {
      console.log(error);
    });

  }

}
