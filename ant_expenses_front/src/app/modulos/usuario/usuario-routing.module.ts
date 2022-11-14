import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './rUsuario/crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './rUsuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path:'crear-usuario',
    component:CrearUsuarioComponent

  },
  {
    path:'eliminar-usuario',
    component:EliminarUsuarioComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
