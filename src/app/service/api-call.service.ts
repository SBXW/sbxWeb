import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  public get(metodo: string) {
    return this.http.get<any[]>(metodo);
  }

  public post(metodo: string, todo: any):Observable<any[]> {
    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let body = JSON.stringify(todo);
    return this.http.post<any[]>(metodo, body, { headers })
  }

}
