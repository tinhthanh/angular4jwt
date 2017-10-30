import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeRoutingModule }  from  './home-routing.module';
import { ProductDetailsComponent }  from './components/product-details/product-details.component';
import { ProductComponent }  from './components/product/product.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule
    ],
     declarations: [
          HomeComponent,
          ProductComponent,
          ProductDetailsComponent
     ]
})

export class HomeModule { }
