import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigValue }  from '../_models/ConfigValue';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class Authentication{
    private headers = new Headers();
  constructor(private http: Http ,
            private config: ConfigValue ){
        this.headers.append('Content-Type', 'application/json');       
     }
     login(username: string, password: string){
         return this.http.post(this.config.url_port+'/auth/login', JSON.stringify({ username: "admin", password: "123" }),{headers: this.headers})
            .map(( response: Response ) => {
             let user =  response.json();
                    if(user && user.access_token){
                        let headers = new Headers({ 'Authorization': 'Bearer ' + user.access_token });
                        let token_rest = new RequestOptions({ headers: headers })
                        this.http.get(this.config.url_port+'/api/whoami', token_rest ).map((response: Response) => response.json())
                        .subscribe(users => { 
                                user.profile = users ;
                                console.log(user)
                             localStorage.setItem(this.config.token_tmdt,JSON.stringify(user));
                            });
                    }
               return user;
            });
     }
     profile(token:string){
         return "";
     }
     logout() {
         localStorage.removeItem(this.config.token_tmdt);
     }
      private jwt() {
                // create authorization header with jwt token
                let currentUser = JSON.parse(localStorage.getItem(this.config.token_tmdt));
                if (currentUser && currentUser.token) {
                    let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token,
                                                'Content-Type': 'application/json' },
                            );
                    return new RequestOptions({ headers: headers });
                }
            }
}