import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaEstadoProducto } from 'src/app/interfaces/consulta-estado-producto';
import { Productos } from 'src/app/interfaces/productos';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { 

  }

  getProductos(): Observable<Productos[]> { 
    return this.apiCallService.get(this.url+"api/Productos")
  }

  getConsultaEstadoProductos(Buscar:string, TipoBusqueda: string, DatoBusqueda:string): Observable<ConsultaEstadoProducto[]> { 
    return this.apiCallService.get(`${this.url}api/Productos/consultaEstadoProducto/Buscar/${Buscar}/TipoBusqueda/${TipoBusqueda}/DatoBusqueda/${DatoBusqueda}`)
  }

  postProductos (productos: Productos ): Observable<ProductosService[]> {
    return this.apiCallService.post(this.url+"api/Productos", productos)
  }

}
