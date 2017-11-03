import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

import { Authentication } from './../../_service/AuthenticationService';
@Component({
    selector: 'app-admin-login',
    template: ` login admin
    <router-outlet></router-outlet>
    `
})

export class AdminLoginComponent implements OnInit {
    constructor(private router: Router,
                private route: ActivatedRoute,
                private authentication: Authentication) { }
                ngOnInit(){
                    this.authentication.login('aaa','sss').then( res => {
                             console.log(res);
                    });
                  this.route.snapshot.queryParams['returnUrl'] || '/';
              }
}