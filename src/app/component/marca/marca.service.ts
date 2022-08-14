import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/interfaces/marca';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { }

  getMarca(): Observable<Marca[]> { 
    return this.apiCallService.get(this.url+"api/Marcas")
  }

}
