import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ModeloCuentas } from '../modelos/cuentas.modelo';
import { ModeloDatos } from '../modelos/datos.modelo';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  url = 'http://localhost:3000';


  constructor(private http : HttpClient) { }

  obtenercuentas(){
    return this.http.get<ModeloCuentas>(this.url+"/cuentas");
  };
  obtenercuentasporid(id:string):Observable<ModeloCuentas>{
    return this.http.get<ModeloCuentas>( `${this.url}/cuentas/${id}` );
  };
  CrearCuenta(cuentas: ModeloCuentas): Observable<ModeloCuentas>{

    return this.http.post<ModeloCuentas>(this.url+"/cuentas", cuentas,
    {headers: {'Content-Type': 'application/json'}} )
  
    }
    ActualizarCuenta(cuentas: ModeloCuentas): Observable<ModeloCuentas>{

      return this.http.put<ModeloCuentas>(`${this.url}/cuentas/${cuentas.id}`, cuentas,
      {headers: new HttpHeaders({
      })
      })
    
      }
      
        obtenerTodo() : Observable<ModeloCuentas[]> {
          return this.http.get<ModeloCuentas[]>(this.url, {headers: {'Content-Type': 'application/json'}});
        }
       Eliminar(id: string):Observable<any>{
        return this.http.delete(`${this.url}/cuentas/${id}`,{
          headers: new HttpHeaders({

          })

        })

       }
       Actualizar(cuentas:ModeloCuentas):Observable<ModeloCuentas>{
        return this.http.put<ModeloCuentas>(this.url+"/cuentas ",cuentas,{
          headers: new HttpHeaders({

          })
        })

       }
}
