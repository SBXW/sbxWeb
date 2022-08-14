import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { }
      
    getCategoria(): Observable<Categoria[]> { 
    return this.apiCallService.get(this.url+"api/Categoriums")
  }
   
}
