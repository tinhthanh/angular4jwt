import { Token } from './../_models/Token';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { ConfigValue }  from '../_models/ConfigValue';
// luu mãng từ resfull gửi về
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class Authentication{
    private headers = new Headers();
    private user ; 
  constructor(private http: Http ,
            private config: ConfigValue ){
        this.headers.append('Content-Type', 'application/json');       
       }
     login(username: string, password: string): Promise<Token>{
        //  return this.http.post(this.config.url_port+'/auth/login', JSON.stringify({ username: "admin", password: "123" }),{headers: this.headers})
        //     .map(( response: Response ) => {
        //      let user =  response.json();
        //             if(user && user.access_token){
        //                 localStorage.setItem(this.config.token_tmdt,JSON.stringify(user));
        //                 this.http.get(this.config.url_port+'/api/whoami', this.getToken() ).map((response: Response) => response.json())
        //                 .subscribe(users => { 
        //                         user.profile = users ;
        //                         console.log(user);
        //                      localStorage.setItem(this.config.token_tmdt,JSON.stringify(user));
        //                     });
        //                }
        //        return user;
        //     });
        
      return this.http
        .post(this.config.url_port+'/auth/login', JSON.stringify({ username: "admin", password: "123" }) , {headers: this.headers})
        .toPromise()
        .then(res =>   
            {   let user =  res.json();
                 if(user &&  user.access_token ){
                      localStorage.setItem(this.config.token_tmdt, JSON.stringify(user)) ;
                      this.http.get(this.config.url_port+'/api/whoami', this.getToken())
                         .toPromise()
                         .then(res => res.json())
                         .then(
                              res => {
                                user.profile =  res;
                                console.log(user);
                                localStorage.setItem(this.config.token_tmdt,JSON.stringify(user));
                              }
                         );
                 }else{
                     return null;
                 }
               return res.json() as Token  } )
        .catch(this.handleError); 
      }
        
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


     logout() {
         localStorage.removeItem(this.config.token_tmdt);
      }
      private getToken() {
                // lấy token từ client
                let currentUser = JSON.parse(localStorage.getItem(this.config.token_tmdt));
                if (currentUser && currentUser.access_token) {
                    let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
                    return new RequestOptions({ headers: headers });
                }
            }
     }