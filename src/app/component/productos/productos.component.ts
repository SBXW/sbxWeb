import { Component, OnInit } from '@angular/core';
import { ConsultaEstadoProducto } from 'src/app/interfaces/consulta-estado-producto';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: ConsultaEstadoProducto[] =[]

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.buscarProducto()
  }

  buscarProducto() {
    this.productosService.getConsultaEstadoProductos("x", "Contiene", "Nombre").subscribe(result=>{
      console.log(result)
      this.productos =result
    })
  }

}
