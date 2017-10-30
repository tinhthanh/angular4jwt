import { Component, Input } from '@angular/core';
import { Product } from './../../../_models/Product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
      @Input()  product: Product;
  constructor() { }
  ngOnInit() {
            
  }

}
