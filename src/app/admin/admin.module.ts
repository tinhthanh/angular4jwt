import { NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';

import { KhoaHocComponent} from './components/khoahoc/khoa-hoc.component';
import { LoginAdminComponent }  from  './components/loginadmin/login-admin.component';

import  { ManagerAccountComponent } from './components/manageraccount/manager-account.component';
import { AdminComponent } from  './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
     imports: [
        //  CommonModule,
         AdminRoutingModule
     ],
     declarations: [
         AdminComponent,
         KhoaHocComponent,
         LoginAdminComponent,
         ManagerAccountComponent,
     ]
})

export class AdminModule { }