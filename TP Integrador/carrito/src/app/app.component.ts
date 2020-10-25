import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carrito';

  productList = [
    {
      "productId": 1,
      "productCategoryId": 5,
      "name": "Bread - White, Sliced",
      "description": "Carbonated Water - Peach",
      "price": 45194.55
    },
    {
      "productId": 2,
      "productCategoryId": 2,
      "name": "Crackers - Melba Toast",
      "description": "Nantucket - Carrot Orange",
      "price": 31388.36
    },
    {
      "productId": 3,
      "productCategoryId": 2,
      "name": "Crush - Orange, 355ml",
      "description": "Carbonated Water - Blackberry",
      "price": 34669.69
    }]


}
