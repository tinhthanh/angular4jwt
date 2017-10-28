import { NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';

import { KhoaHocComponent} from  './components/khoa-hoc.component';
import { LoginAdminComponent } from './components/login-admin.component';
import { ManagerAccountComponent } from './components/manager-account.component';
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
         ManagerAccountComponent
     ]
})

export class AdminModule { }