import { Component } from '@angular/core';
import {ProductService} from "../shared/services/productservice";
import {Product} from "../shared/models/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdevintro';
  selected: Product;
  producten$: Observable<Product[]>;

  constructor(private productService: ProductService){
    this.producten$ = productService.getProducten();
  }
}
