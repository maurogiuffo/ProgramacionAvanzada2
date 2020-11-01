import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
  edit: boolean= false;
  product: Product = null; 
  title: string = '';
  message: string = '';

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    productCategoryId: new FormControl(''),
  });

  constructor( private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let param= this.route.snapshot.paramMap.get('id');
    if(param== undefined || param== null || param == ""){
      this.title = "Add";
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
    });
  }


  saveProduct(){

    if(!this.edit)
    {
      this.product = new Product();
    }

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
