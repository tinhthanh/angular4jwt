import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigValue }  from '../_models/ConfigValue';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class Authentication{
    private headers = new Headers();
  constructor(private http: Http ,
            private config: ConfigValue){
        this.headers.append('Content-Type', 'application/json');       
     }
     login(username: string, password: string){
         return this.http.post(this.config.url_port+'/auth/login', JSON.stringify({ username: "admin", password: "123" }),{headers: this.headers})
            .map(( response: Response ) => {
             let user =  response.json();
                    if(user && user.access_token){
                        console.log("save token");
                        localStorage.setItem(this.config.token_tmdt,JSON.stringify(user));
                    }
                   this.http.get(this.config.url_port+'/api/whoami').toPromise()
                   .then(res => { console.log(res.json()) } ).then()
                   
               return user;
            });
     }
     profile(token:string){
         return "";
     }
     logout() {
         localStorage.removeItem(this.config.token_tmdt);
     }
}