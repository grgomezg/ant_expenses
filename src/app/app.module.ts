import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { TiposCuentasComponent } from './components/tipos-cuentas/tipos-cuentas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TransaccionesComponent,
    CuentasComponent,
    TiposCuentasComponent,
    CategoriasComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
