import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent }  from  './home/components/pages/page-not-found.component';

import { AuthSercurity }  from  './_sercurity/AuthSercurity';
import { DemoComponent } from './demo/demo.component';
const routers: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
    path: 'demo',
    component: DemoComponent
    },
    {
        path: 'notfound', component: PageNotFoundComponent
    },
    {
        path: 'admin',
        loadChildren : 'app/admin/admin.module#AdminModule',
        canActivate: [AuthSercurity]
    },
      {
    path : 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule'
      },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}