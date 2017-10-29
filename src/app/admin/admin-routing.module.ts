import { NgModule }  from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { KhoaHocComponent} from './components/khoahoc/khoa-hoc.component';
import { LoginAdminComponent }  from  './components/loginadmin/login-admin.component';

import  { ManagerAccountComponent } from './components/manageraccount/manager-account.component';
import { AdminComponent } from './admin.component';

const routes:     Routes                       = [
  {
      path:       '',
      component:  AdminComponent,
      children:   [
          { path: 'khoa-hoc', component:         KhoaHocComponent},
          { path: 'admin-login', component:      LoginAdminComponent},
          { path: 'manager-accounts', component: ManagerAccountComponent}
      ],
      data:       { preload:                     true }
  }
]
@NgModule({
     imports:     [
         RouterModule.forChild(routes)
     ],
     exports:     [
         RouterModule
     ]
}) 

export class AdminRoutingModule { }