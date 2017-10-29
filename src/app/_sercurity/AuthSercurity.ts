import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigValue } from './../_models/ConfigValue';

@Injectable()
export class AuthSercurity implements CanActivate{
     constructor(
         private router: Router  ,   
         private configValue: ConfigValue ) { 
     }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
         let user = localStorage.getItem(this.configValue.token_tmdt);
         if(user){
             let temp =  (JSON.parse(user))
              let role= temp['profile'].authorities;
                for( var i = 0 ; i < role.length ; i++ ){
                    if(role[i].authority == this.configValue.role_admin) {
                        return true;
                    }
                }
                this.router.navigate(['/home'],{ queryParams:{ returnUrl: state.url } })
              return false ;
         }
         this.router.navigate(['/home'],{ queryParams:{ returnUrl: state.url } })
        return  false;
     }
}