import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';


const approutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'product', component: ProductComponent},
    {path:'**', component: ErrorpageComponent } //esta debe ser la ultima ruta
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(approutes);
