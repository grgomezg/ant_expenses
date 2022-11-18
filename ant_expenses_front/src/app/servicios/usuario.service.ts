import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Modelousuario } from '../modelos/usuario.modelo';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

    url = "http://localhost:3000"
  /*
    nombre: CrearUsuario
    Parametros_tipo: Json/usuario
    Salida: Boleano
  
  */
  CrearUsuario(usuario: Modelousuario): Observable<Modelousuario>{

  return this.http.post<Modelousuario>(this.url+"/usuarios", usuario,{headers: {'Content-Type': 'application/json'}} )

  }

}
