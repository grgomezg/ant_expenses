import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposCuentaService {
  url = 'http://localhost:3001/tipos-cuenta'

  constructor(private http:HttpClient) {

   }
   crear(crearCuenta : string){
    this.http.post(this.url,{"tipo-cuenta": "Efectivo",})
   }
}
