import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'src/app/common/custom-validators';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
  edit: boolean= false;
  product: Product = null;
  productCategories: Array<ProductCategory> = null;
  title: string = '';
  message: string = '';

  productForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5),CustomValidators.forbiddenWords(/Pan/)],[CustomValidators.productExists(this.productService)]),
    description: new FormControl(''),
    price: new FormControl(''),
    productCategoryId: new FormControl(''),
  });

  constructor( private productService: ProductService,private productCategoryService: ProductCategoryService, private route: ActivatedRoute) { }

  get name() { return this.productForm.get('name'); }

  ngOnInit(): void {

    this.productCategoryService.getAll()
    .then(result=>{
      this.productCategories = result;
    })
    .catch(error => {
      console.log(error);
      this.message = "An error has occurred!";
    });

    let param= this.route.snapshot.paramMap.get('id');
    if(param== undefined || param== null || param == ""){
      this.title = "Add";
      this.product = new Product();
      return;
    }

    this.title = "Edit";
    this.edit = true;
    let productId = Number(param);

    this.productService.getById(productId)
    .then(result=>{
      this.product = result;
      this.productForm.get('name').setValue(this.product.name);
      this.productForm.get('description').setValue(this.product.description);
      this.productForm.get('price').setValue(this.product.price);
      this.productForm.get('productCategoryId').setValue(this.product.productCategoryId);

    })
    .catch(error => {
      console.log(error);
      this.message = "An error has occurred!";
    });
  }


  save(){

    this.product.name = this.productForm.get('name').value;
    this.product.description = this.productForm.get('description').value;
    this.product.price = this.productForm.get('price').value;
    this.product.productCategoryId = this.productForm.get('productCategoryId').value;
    
    if(!this.edit)
    {
      this.productService.add( this.product)
        .then(response  => {
          this.message = "Product successfully added";
        })
        .catch(error =>{
          this.message = "An error has occurred!";
        })
     
        return;
    }

    this.productService.edit( this.product)
    .then(response  => {
      this.message = "Product successfully edited";
    })
    .catch(error =>{
      this.message = "An error has occurred!";
    })

  }


}
