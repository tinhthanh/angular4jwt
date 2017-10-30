import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
 import { Product } from '././../_models/Product';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/of';
 const products: Product[] = [
       {id:0, tenSanPham: " sam sung " , SoLuong: 10 },
       {id:1 , tenSanPham: " nokia " , SoLuong: 10 },
       {id:2 , tenSanPham: " angular " , SoLuong: 10 },
       {id:3 , tenSanPham: " Node JS " , SoLuong: 10 }
 ];
 const products2 = [
       new Product( 0,  ' sam sung ' ,  10 ),
       new Product( 1 ,   'nokia ',   10 ),
       new Product( 2 ,  'angular' ,  10 ),
       new Product( 3 ,   'Node J ', 10 ) ];
@Injectable()
export class ProductService {
      private crises$: BehaviorSubject<Product[]> ;
        getProducts(){
              return new BehaviorSubject<Product[]>(products);
        }
      //   getProducts2() {
      //         return Observable.of(products);
      //   }
      //   getProductById(id: number | string){
      //       return this.getProducts().map( products => );
      //   }
    }