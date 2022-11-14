import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-session',
  templateUrl: './cerrar-session.component.html',
  styleUrls: ['./cerrar-session.component.css']
})
export class CerrarSessionComponent implements OnInit {

  constructor(private seguridadService : SeguridadService,
    private router : Router) { 
      this.seguridadService.cerrarSession();
    this.router.navigate(['']);
    }

  ngOnInit(): void {
  }

}
