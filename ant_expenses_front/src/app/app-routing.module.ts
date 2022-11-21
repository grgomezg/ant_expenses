
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [


  { path: 'inicio', component: InicioComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'seguridad',
    loadChildren: () =>
      import('./modulos/seguridad/seguridad.module').then(
        (x) => x.SeguridadModule
      ),
  },
  {
    path: 'interfaz',
    loadChildren: () =>
      import('./modulos/interfaz/interfaz.module').then(
        (x) => x.InterfazModule
      ),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modulos/usuario/usuario.module').then((x) => x.UsuarioModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
