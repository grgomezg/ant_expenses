import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:3000/login';
  sessionIniciada = new BehaviorSubject<boolean>(false);
  session = "token";


 constructor(private http: HttpClient) {
  this.validarSession();

  }
  
  Identificar(email: string, clave: string){
    let datos = {
      "email":email,
      "clave":clave

    };
    return this.http.post(this.url, datos,{headers: {'Content-Type': 'application/json'}} );

            
   }
   almecenar(llave : string, valor : string){
    localStorage.setItem(llave,valor)
   }
   obtener(llave : string){
    return localStorage.getItem(llave);
   }
   cerrarSession(){
    localStorage.removeItem(this.session);
    this.sessionIniciada.next(false);
   }
   validarSession(){
    if(this.obtener(this.session)){
      this.sessionIniciada.next(true);
    }
   }
   sessionUsuarioObservable(){
    return this.sessionIniciada.asObservable();
   }
   AlmacenaSesion(datos:ModeloIdentificar){
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos)
   }
   obtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
   }
   EliminarInformacionSession(){
    localStorage.removeItem("datosSesion")
   }
   

}
