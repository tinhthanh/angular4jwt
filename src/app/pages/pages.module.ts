import { NgModule }  from  '@angular/core';
import { PagesRoutinModule }  from './pages-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
@NgModule({
     imports: [
     PagesRoutinModule
     ],
     declarations:[
         AdminLoginComponent
     ]
})

export class PagesModule { }

