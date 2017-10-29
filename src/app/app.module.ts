import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router';

import { HttpModule } from  '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './home/components/pages/page-not-found.component';
 
import { AppRoutingModule } from './app-routing.module';


// my service
import { AuthSercurity } from './_sercurity/AuthSercurity';  
import  { Authentication }  from './_service/AuthenticationService';
import { ConfigValue }  from './_models/ConfigValue';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
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
