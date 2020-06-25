import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SalidaComponent } from './components/salida/salida.component';
import { VentaComponent } from './components/venta/venta.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { UnidadMedidaComponent } from './components/unidad-medida/unidad-medida.component';
import { CierreComponent } from './components/cierre/cierre.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ErrorpageComponent,
    SalidaComponent,
    VentaComponent,
    GastoComponent,
    TrabajadorComponent,
    UnidadMedidaComponent,
    CierreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
