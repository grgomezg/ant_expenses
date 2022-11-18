import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { RUsuarioComponent } from './r-usuario/r-usuario.component';
import { CrearUsuarioComponent } from './rUsuario/crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './rUsuario/eliminar-usuario/eliminar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RUsuarioComponent,
    CrearUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
