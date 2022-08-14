
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ProveedoresComponent } from './component/proveedores/proveedores.component';
import { UnidadMedidaComponent } from './component/unidad-medida/unidad-medida.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { MarcaComponent } from './component/marca/marca.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { SalidaParaComponent } from './component/salida-para/salida-para.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    InicioComponent,
    ProductosComponent,
    ProveedoresComponent,
    UnidadMedidaComponent,
    CategoriaComponent,
    MarcaComponent,
    UbicacionComponent,
    SalidaParaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
