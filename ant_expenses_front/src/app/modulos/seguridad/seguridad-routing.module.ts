import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionesComponent } from '../interfaz/transacciones/transacciones.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSessionComponent } from './cerrar-session/cerrar-session.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path:"identificar",
    component: IdentificacionComponent
    
  },
  {
    path:"cambiarClave",
    component: CambioClaveComponent
  },
  { path: 'cerrar-session', 
  component: CerrarSessionComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
