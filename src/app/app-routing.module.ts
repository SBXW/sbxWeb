import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'productos', component:ProductosComponent},
  {path:'productos/:Buscar/:TipoBusqueda/:DatoBusqueda', component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
