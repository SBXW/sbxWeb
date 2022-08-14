import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadMedida } from 'src/app/interfaces/unidad-medida';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { }
    
  getUnidadMedida(): Observable<UnidadMedida[]> { 
      return this.apiCallService.get(this.url+"api/UnidadMedidums")
    
  }
}
