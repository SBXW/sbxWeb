import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConsultaEstadoProducto } from 'src/app/interfaces/consulta-estado-producto';
import { ProductosService } from './productos.service';
import { Message, MessageService } from 'primeng/api';
import { Productos } from 'src/app/interfaces/productos';
import { ProveedorService } from 'src/app/component/proveedores/proveedor.service';
import { UnidadMedidaService } from 'src/app/component/unidad-medida/unidad-medida.service';
import { MarcaService } from 'src/app/component/marca/marca.service';
import { CategoriaService } from 'src/app/component/categoria/categoria.service';
import { SalidaParaService } from 'src/app/component/salida-para/salida-para.service';
import { UbicacionService } from 'src/app/component/ubicacion/ubicacion.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: ConsultaEstadoProducto[] = [];
  productosBase: ConsultaEstadoProducto[] = [];
  CrearProducto: boolean = false;
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  productoRes!: Productos;
  msgRegistroProducto: Message[] = [];
  seleccionProveedor: any;
  ListaProveedor: any[] = [];
  ListaProveedorBase: any[] = [];
  ListaUnidadMedida: any[] = [];
  ListaUnidadMedidaBase: any[] = [];
  modoVenta: any[] = [];
  estado: any[]=[];
  listaMarca: any[]=[];
  listaMarcaBase: any[]=[];
  ListaCategoria: any[]=[];
  ListaCategoriaBase: any[]=[];
  ListaUbicacion: any[]=[];
  ListaUbicacionBase: any[]=[];
  ListaSalidaPara: any[]=[];
  ListaSalidaParaBase: any[]=[];

  formDatos: FormGroup = this.fb.group({
    forItem: [0],
    forNombre: ['', Validators.required],
    forDescripcion: ['', Validators.required],
    forReferencia: ['', Validators.required],
    forCodigoBarras: ['', Validators.required],
    forIVA: ['', Validators.required],
    forUnidadMedida: ['', Validators.required],
    forMedida: ['', Validators.required],
    forEstado: ['', Validators.required],
    forCategoria: ['', Validators.required],
    forMarca: ['', Validators.required],
    forModoVenta: ['', Validators.required],
    forProveedor: ['', Validators.required],
    forCosto: ['', Validators.required],
    forPrecio: ['', Validators.required],
    forMargen: ['', Validators.required],
    forUbicacion: ['', Validators.required],
    forSalida: ['', Validators.required],
    forFechaV: ['', Validators.required],
    forStockMin: ['', Validators.required],
    forStocMax: ['', Validators.required],
    forStockActual: ['', Validators.required],
    forCantidad: ['', Validators.required],
    forNota: ['', Validators.required],
    forImagen: ['', Validators.required],
    forTipoRegistro: ['', Validators.required],
  })

  constructor(private productosService: ProductosService, private fb: FormBuilder, private ProveedorService: ProveedorService,
    private UnidadMedidaService: UnidadMedidaService, private MarcaService: MarcaService, private CategoriaService: CategoriaService,
    private UbicacionService: UbicacionService, private SalidaParaService: SalidaParaService) { 

      this.modoVenta = [
        {name:'Unidad'},
        {name:'Pesaje'},
        {name:'Multi'},
        {name: 'Desechable'},
        {name:'Queso'}
      ]

      this.estado = [
        {name:'Activo', code:'1'},
        {name:'Inactivo', code:'2'}
      ]

    }

  ngOnInit(): void {
    this.consultaProveedor();
    this.consultaUnidadMedida();
    this.consultaCategoria();
    this.consultaMarca();
    this.consultaSalidaPara();
    this.consultaUbicacion();
    this.buscarProducto();
    this.loading = false;
  }

  buscarProducto() {
    this.productosService.getConsultaEstadoProductos(" ", "Contiene", "Nombre").subscribe(result => {
      console.log(result)
      this.productos = result
      this.productosBase = this.productos
    })
  }

  filterGlobal(dato: string) {
    this.productos = this.productosBase.filter(x => x.item.toString().includes(dato) || x.nombre.toLowerCase().includes(dato))
  }

  mtdAbrirModal() {
    if (!this.CrearProducto) {
      this.CrearProducto = true
    }
    console.log("Ok")
  }

  vleProducto: Productos = {
    item: 0,
    referencia: "",
    nombre: "",
    descripcion: "",
    iva: 0,
    unidadDeMedidad: 0,
    medida: 0,
    estado: 0,
    categoria: 0,
    marca: 0,
    proveedor: "",
    modoVenta: "",
    ubicacion: 0,
    salidaPara: 0,
    stockMinimo: 0,
    stockMaximo: 0,
    cantidad: 0,
    costo: 0,
    precioVenta: 0,
    codigoBarras: "",
    subCantidad: 0,
    valorSubCantidad: 0,
    sobres: 0,
    valorSobre: 0,
    usuario: 0,
    fechaRegistro: new Date,
    movimiento: "",
    descuentoProveedor: 0,
    fechaVencimiento: "",
    costoCalculado: 0,
    nota: ""
  }

  limpiarFormulario() {
    this.formDatos = this.fb.group({
      forItem: [0],
      forNombre: ['', Validators.required],
      forDescripcion: ['', Validators.required],
      forReferencia: ['', Validators.required],
      forCodigoBarras: ['', Validators.required],
      forIVA: ['', Validators.required],
      forUnidadMedida: ['', Validators.required],
      forMedida: ['', Validators.required],
      forEstado: ['', Validators.required],
      forCategoria: ['', Validators.required],
      forMarca: ['', Validators.required],
      forModoVenta: ['', Validators.required],
      forProveedor: ['', Validators.required],
      forCosto: ['', Validators.required],
      forPrecio: ['', Validators.required],
      forMargen: ['', Validators.required],
      forUbicacion: ['', Validators.required],
      forSalida: ['', Validators.required],
      forFechaV: ['', Validators.required],
      forStockMin: ['', Validators.required],
      forStocMax: ['', Validators.required],
      forStockActual: ['', Validators.required],
      forCantidad: ['', Validators.required],
      forNota: ['', Validators.required],
      forImagen: ['', Validators.required],
      forTipoRegistro: ['', Validators.required],
    })
  }

  mtdGuardar() {
    let proveedor: any = this.ListaProveedorBase.filter(x => x.nombre = this.formDatos.get('forProveedor')?.value)
    let unidadDeMedida: any = this.ListaUnidadMedidaBase.filter(x => x.nombre = this.formDatos.get('forUnidadMedida')?.value)
    let categoria: any = this.ListaCategoriaBase.filter(x => x.nombre = this.formDatos.get('forCategoria')?.value)
    let marca: any = this.listaMarcaBase.filter(x => x.nombre = this.formDatos.get('forMarca')?.value)

    console.log("Ok2")
    this.vleProducto.item = 0;
    this.vleProducto.nombre = this.formDatos.get('forNombre')?.value;
    this.vleProducto.descripcion = this.formDatos.get('forDescripcion')?.value;
    this.vleProducto.referencia = this.formDatos.get('forReferencia')?.value;
    this.vleProducto.codigoBarras = this.formDatos.get('forCodigoBarras')?.value;
    this.vleProducto.iva = this.formDatos.get('forIVA')?.value;
    this.vleProducto.unidadDeMedidad = unidadDeMedida.codigo;
    this.vleProducto.medida = this.formDatos.get('forMedida')?.value;
    this.vleProducto.estado = this.formDatos.get('forEstado')?.value;
    this.vleProducto.categoria = categoria.codigo;
    this.vleProducto.marca = marca.codigo;
    this.vleProducto.modoVenta = this.formDatos.get('forModoVenta')?.value;
    this.vleProducto.proveedor = proveedor.dni;
    this.vleProducto.costo = this.formDatos.get('forCosto')?.value;
    this.vleProducto.precioVenta = this.formDatos.get('forPrecio')?.value;
    this.formDatos.get('forMargen')?.value;
    this.vleProducto.ubicacion = this.formDatos.get('forUbicacion')?.value;
    this.vleProducto.salidaPara = this.formDatos.get('forSalida')?.value;
    this.vleProducto.fechaVencimiento = this.formDatos.get('forFechaV')?.value;
    this.vleProducto.stockMinimo = this.formDatos.get('forStockMin')?.value;
    this.vleProducto.stockMaximo = this.formDatos.get('forStocMax')?.value;
    this.formDatos.get('forStockActual')?.value;
    this.vleProducto.cantidad = this.formDatos.get('forCantidad')?.value;
    this.vleProducto.nota = this.formDatos.get('forNota')?.value;
    this.formDatos.get('forImagen')?.value;
    this.formDatos.get('forTipoRegistro')?.value;
    let Peticion: Observable<any>;
    console.log(this.vleProducto)
    Peticion = this.productosService.postProductos(this.vleProducto);
    Peticion.subscribe(respuesta => {
      console.log("Recibido", respuesta);
      this.productoRes = respuesta;
      if (this.productoRes.item != 0) {
        this.showViaService();
        this.limpiarFormulario()
      }
    })
  }

  showViaService() {
    this.msgRegistroProducto = [{ severity: 'success', summary: 'Registro Correcto', detail: 'de Producto' }];
  }

  consultaProveedor() {
    this.ProveedorService.getProveedor().subscribe(result => {
      this.ListaProveedor = result;
      this.ListaProveedorBase = result;
      console.log(this.ListaProveedor)
    })
  }

  filterGlobalProveedor(dato: string) {
    console.log(this.ListaProveedor, this.ListaProveedorBase)
    this.ListaProveedor = this.ListaProveedorBase.filter(x => x.nombre.toString().includes(dato) || x.dni.toLowerCase().includes(dato))
    console.log(dato)
  }

  ivaInvalido: boolean = false;
  margenValido: boolean = false;
  precioVenta: number = 0;

  calculoMargen(dato: string) {
    console.log(this.formDatos.get('forIVA')?.value)
    let vl = 0
    if (this.formDatos.get('forIVA')?.value == "") {
      vl++;
      this.ivaInvalido = true;
    }
    if (this.formDatos.get('forMargen')?.value == "") {
      vl++;
      this.margenValido = true;
    }
    if (vl == 0) {
      if (this.formDatos.get('forMargen')?.value == 100) {
        let margen = Number(this.formDatos.get('forMargen')?.value) - 1;
        this.formDatos.patchValue({ forMargen: margen })
      }
      this.precioVenta = Number(this.formDatos.get('forIVA')?.value) / (1 - Number(this.formDatos.get('forMargen')?.value) / 100);
      this.formDatos.patchValue({ forPrecio: this.precioVenta })
    }
    else {
      this.formDatos.patchValue({ forPrecio: '' })
    }
  }

  consultaUnidadMedida() {
    this.UnidadMedidaService.getUnidadMedida().subscribe(result => {
      this.ListaUnidadMedida = result;
      this.ListaUnidadMedidaBase = result;
      console.log(this.ListaUnidadMedida)
    })
  }

  filterGlobalUnidadMedida(dato: string) {
    console.log(this.ListaUnidadMedida, this.ListaUnidadMedidaBase)
    this.ListaUnidadMedida = this.ListaUnidadMedidaBase.filter(x => x.nombre.toString().includes(dato) || x.dni.toLowerCase().includes(dato))
    console.log(dato)
  }

  consultaMarca() {
    this.MarcaService.getMarca().subscribe(result => {
      this.listaMarca = result;
      this.listaMarcaBase = result;
      console.log(this.listaMarca)
    })
  }

  filterGlobalMarca(dato: string) {
    console.log(this.listaMarca, this.listaMarcaBase)
    this.listaMarca = this.listaMarcaBase.filter(x => x.nombre.toString().includes(dato) || x.dni.toLowerCase().includes(dato))
    console.log(dato)
  }

  consultaCategoria() {
    this.CategoriaService.getCategoria().subscribe(result => {
      this.ListaCategoria = result;
      this.ListaCategoriaBase = result;
      console.log(this.ListaCategoria)
    })
  }

  filterGlobalCategoria(dato: string) {
    console.log(this.ListaCategoria, this.ListaCategoriaBase)
    this.ListaCategoria = this.ListaCategoriaBase.filter(x => x.nombre.toString().includes(dato) || x.dni.toLowerCase().includes(dato))
    console.log(dato)
  }

  consultaUbicacion() {
    this.UbicacionService.getUbicacion().subscribe(result => {
      this.ListaUbicacion = result;
      this.ListaUbicacionBase = result;
      console.log(this.ListaUbicacion)
    })
  }

  filterGlobalUbicacion(dato: string) {
    console.log(this.ListaUbicacion, this.ListaUbicacionBase)
    this.ListaUbicacion = this.ListaUbicacionBase.filter(x => x.nombre.toString().includes(dato) || x.dni.toLowerCase().includes(dato))
    console.log(dato)
  }

  consultaSalidaPara() {
    this.SalidaParaService.getSalidaPara().subscribe(result => {
      this.ListaSalidaPara = result;
      this.ListaSalidaParaBase = result;
      console.log(this.ListaSalidaPara)
    })
  }

  filterGlobalSalidaPara(dato: string) {
    console.log(this.ListaSalidaPara, this.ListaSalidaParaBase)
    this.ListaSalidaPara = this.ListaSalidaParaBase.filter(x => x.nombre.toString().includes(dato) || x.dni.toLowerCase().includes(dato))
    console.log(dato)
  }

}