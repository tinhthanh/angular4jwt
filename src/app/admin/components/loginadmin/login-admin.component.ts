import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Authentication } from '../../../_service/AuthenticationService';


@Component({
    selector: 'app-login-admin',
    templateUrl: 'login-admin.component.html'
})

export class LoginAdminComponent implements OnInit  {
     returnUrl: string 
    constructor(
          private route: ActivatedRoute,
          private router: Router ,
          private authentication: Authentication
      ){}
      ngOnInit(){
          this.authentication.login('aaa','sss').subscribe(
              data => {
                  console.log(data);
              }
          );
    
        this.route.snapshot.queryParams['returnUrl'] || '/';
    }
      

 }