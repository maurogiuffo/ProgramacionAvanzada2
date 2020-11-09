import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from 'src/app/services/product.service';

export class CustomValidators {
    static forbiddenWords(forbiddenWords: RegExp): ValidatorFn {        
        return (control: AbstractControl): {[key: string]: any} | null => {
          const forbidden = forbiddenWords.test(control.value);

          return forbidden ? { 'forbiddenWords': {value: control.value} } : null;
        };
    }

    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;

        return (control: AbstractControl): {[key: string]: any} | null => {                     
            const lettersOnly = regExp.test(control.value);

            return !lettersOnly ? { 'lettersOnly': {value: control.value} } : null;
        };
    }

    static productExists(productService: ProductService): AsyncValidatorFn {       
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
          if (control.value == '') {
            return null;
          }
          else {
            return productService.getAll()
                .then(response => {

                    let userList: Array<Product> = response;

                    let exist: Boolean= userList.findIndex(u => u.name == control.value)> -1;

                    return exist ? { 'productExists': { value: control.value } } : null;
                })
          }                  
        };
      }
}
