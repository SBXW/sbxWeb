import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalidaPara } from 'src/app/interfaces/salida-para';
import { ApiCallService } from 'src/app/service/api-call.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalidaParaService {

  url: string = environment.endpoint

  constructor(private apiCallService: ApiCallService) { }

  getSalidaPara(): Observable<SalidaPara[]> { 
    return this.apiCallService.get(this.url+"api/SalidaParas")
  }

}
