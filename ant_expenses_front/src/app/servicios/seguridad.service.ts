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
   /*url = 'http://localhost:3000'


  constructor(private http: HttpClient) {

   }
   
   Identificar(email: string, clave: string):Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>('${this.url}/login',{
      email : email,
      clave : clave,
      
      
      
    },{
      headers:new HttpHeaders({
        

      })
      
    })
    
   }*/

}
