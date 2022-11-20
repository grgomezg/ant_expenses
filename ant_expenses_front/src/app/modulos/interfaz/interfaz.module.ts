import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfazRoutingModule } from './interfaz-routing.module';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { TipoOperacionesComponent } from './tipo-operaciones/tipo-operaciones.component';
import { TipoCuentasComponent } from './tipo-cuentas/tipo-cuentas.component';
import { CategoriaGastosComponent } from './categoria-gastos/categoria-gastos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliminarcuentasComponent } from './cuentas/eliminarcuentas/eliminarcuentas.component';
import { EditarcuentasComponent } from './cuentas/editarcuentas/editarcuentas.component';


@NgModule({
  declarations: [
    TransaccionesComponent,
    CuentasComponent,
    TipoOperacionesComponent,
    TipoCuentasComponent,
    CategoriaGastosComponent,
    EliminarcuentasComponent,
    EditarcuentasComponent
  ],
  imports: [
    CommonModule,
    InterfazRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InterfazModule { }
