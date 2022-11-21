import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaGastosComponent } from './categoria-gastos/categoria-gastos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { TipoCuentasComponent } from './tipo-cuentas/tipo-cuentas.component';
import { TipoOperacionesComponent } from './tipo-operaciones/tipo-operaciones.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  {
    path: 'transacciones',
    component: TransaccionesComponent,
  },
  {
    path: 'categoriaGastos',
    component: CategoriaGastosComponent,
  },
  {
    path: 'cuentas',
    component: CuentasComponent,
  },

  {
    path: 'tipoOperaciones',
    component: TipoOperacionesComponent,
  },
  {path: 'tipoCuentas', component:TipoCuentasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazRoutingModule {}
