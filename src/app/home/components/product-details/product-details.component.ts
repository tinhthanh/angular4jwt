import { Component, Input } from '@angular/core';
import { Product } from './../../../_models/Product';
import { Router }  from  '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
      @Input()  product: Product;
  constructor(private router: Router ) { }
  ngOnInit() {
            
  }
  gotoHeroes(product: Product) {
    let productID = product ? product.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['home/product', { id: productID, tenSanPham: 'foo', SoLuong: 10 }]);
  }

}
