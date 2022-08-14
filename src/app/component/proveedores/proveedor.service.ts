import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedores } from 'src/app/interfaces/proveedores';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { }

  getProveedor(): Observable<Proveedores[]> { 
    return this.apiCallService.get(this.url+"api/Proveedores")
  }

}
