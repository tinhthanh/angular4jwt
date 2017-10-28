import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent }  from  './home/components/pages/page-not-found.component';
import { HomeComponent }  from './home/home.component';
const routers: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'notfound', component: PageNotFoundComponent
    },
    {
        path: 'admin',
        loadChildren : 'app/admin/admin.module#AdminModule'
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