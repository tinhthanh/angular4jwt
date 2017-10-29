import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminLoginComponent } from  './admin-login/admin-login.component';
const routers: Routes = [
     {
         path: 'admin-login',
         component: AdminLoginComponent,
     }
]
@NgModule({
     imports:[
        RouterModule.forChild(routers)
     ],
     exports: [ RouterModule ]
})


export class PagesRoutinModule { }
