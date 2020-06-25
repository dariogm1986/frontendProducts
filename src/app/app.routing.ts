import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SalidaComponent } from './components/salida/salida.component';
import { VentaComponent } from './components/venta/venta.component';
import { CierreComponent } from './components/cierre/cierre.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { UnidadMedidaComponent } from './components/unidad-medida/unidad-medida.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';


const approutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'product', component: ProductComponent},
    {path:'salida', component: SalidaComponent},
    {path:'venta', component: VentaComponent},
    {path:'cierre', component: CierreComponent},
    {path:'gasto', component: GastoComponent},
    {path:'trabajador', component: TrabajadorComponent},
    {path:'unidadmedida', component: UnidadMedidaComponent},
    {path:'**', component: ErrorpageComponent } //esta debe ser la ultima ruta
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(approutes);
