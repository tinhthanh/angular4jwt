import { Product } from './../_models/Product';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductDetailsComponent }  from './components/product-details/product-details.component';
import { HomeComponent  } from './home.component' ;
import { ProductComponent }  from './components/product/product.component';
const router: Routes = [
     {
         path: '',
         component: HomeComponent,
         children: [
             {  
                 path: 'product-details',
                 component:ProductDetailsComponent
             },
             {
                 path : 'product',
                 component:ProductComponent
             }
         ]
     }
]

@NgModule({
        imports: [
            RouterModule.forChild(router)
        ] ,
        exports: [
            RouterModule
        ]
})

export  class HomeRoutingModule { }