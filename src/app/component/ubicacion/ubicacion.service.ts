import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { }

  getUbicacion(): Observable<Ubicacion[]> { 
    return this.apiCallService.get(this.url+"api/Ubicacions")
  }

}
