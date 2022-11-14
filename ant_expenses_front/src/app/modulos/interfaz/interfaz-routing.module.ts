import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  {
    path:"transacciones",
    component: TransaccionesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfazRoutingModule { }
