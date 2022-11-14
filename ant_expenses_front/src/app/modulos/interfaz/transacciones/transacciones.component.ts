import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  sessionIniciada = false;
  subscripcionSession = new Subscription();


  constructor( private seguridadService : SeguridadService) { }

  ngOnInit(): void {
    this.subscripcionSession = this.seguridadService.sessionUsuarioObservable().subscribe (datos =>{
      this.sessionIniciada = datos;
    })
  }
}
