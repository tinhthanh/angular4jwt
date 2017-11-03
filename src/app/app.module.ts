import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router';

import { HttpModule } from  '@angular/http';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './home/components/pages/page-not-found.component';
 
import { AppRoutingModule } from './app-routing.module';

import { FormsModule }  from '@angular/forms';

// my service
import { AuthSercurity } from './_sercurity/AuthSercurity';  
import  { Authentication }  from './_service/AuthenticationService';
import { ConfigValue }  from './_models/ConfigValue';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    Authentication,
    ConfigValue,
    AuthSercurity
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
