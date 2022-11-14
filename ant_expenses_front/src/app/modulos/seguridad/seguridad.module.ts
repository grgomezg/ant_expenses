import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecupararClaveComponent } from './recuparar-clave/recuparar-clave.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CerrarSessionComponent } from './cerrar-session/cerrar-session.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,
    RecupararClaveComponent,
    CerrarSessionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    
    ReactiveFormsModule

  ]
})
export class SeguridadModule { }
