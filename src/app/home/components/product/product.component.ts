import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../../_models/Product';
import { ProductService }  from  './../../../_service/ProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ 
     ProductService
  ]
})
export class ProductComponent implements OnInit {
  selectedP: Product;
  products: Observable<Product[]>;

 constructor( private productservice: ProductService ) { }
    
 ngOnInit() {
   this.products = this.productservice.getProducts();
 }
  
  onSelect(p: Product):void {
    this.selectedP = p;
  }

}
