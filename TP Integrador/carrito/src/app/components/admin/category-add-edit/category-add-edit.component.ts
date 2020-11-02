import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css']
})
export class CategoryAddEditComponent implements OnInit {

  edit: boolean= false;
  productCategory: ProductCategory = null; 
  title: string = '';
  message: string = '';

  productCategoryForm = new FormGroup({
    description: new FormControl(''),
  });

  constructor(private productCategoryService: ProductCategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let param= this.route.snapshot.paramMap.get('id');
    if(param== undefined || param== null || param == ""){
      this.title = "Add";
      return;
    }

    this.title = "Edit";
    this.edit = true;
    let productCategoryId = Number(param);

    this.productCategoryService.getById(productCategoryId)
    .then(result=>{
      this.productCategory = result;
      this.productCategoryForm.get('description').setValue(this.productCategory.description);
    })
    .catch(error => {
      console.log(error);
    });
  }

  save(){

    if(!this.edit)
    {
      this.productCategory = new ProductCategory();
    }

    this.productCategory.description = this.productCategoryForm.get('description').value;
    
    if(!this.edit)
    {
      this.productCategoryService.add( this.productCategory)
        .then(response  => {
          this.message = "Product Category successfully added";
        })
        .catch(error =>{
          this.message = "An error has occurred!";
        })
     
        return;
    }

    this.productCategoryService.edit( this.productCategory)
    .then(response  => {
      this.message = "Product Category successfully edited";
    })
    .catch(error =>{
      this.message = "An error has occurred!";
    })

  }
}
