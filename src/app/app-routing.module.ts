import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { LoginComponent } from './components/login/login.component';
import { TiposCuentasComponent } from './components/tipos-cuentas/tipos-cuentas.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'cuentas', component: CuentasComponent },
  { path: 'tipos-cuentas', component: TiposCuentasComponent },
  { path: 'transacciones', component: TransaccionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
