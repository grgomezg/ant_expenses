import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SeguridadService} from 'src/app/servicios/seguridad.service';
import * as cryptoJS  from "crypto-js";
import { Router } from '@angular/router';




@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})

export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.minLength(5), Validators.email]],
    'clave': ['',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]]
  
  });
  

  constructor(private fb: FormBuilder,
  private servicioSeguridad: SeguridadService,
  private router : Router) {
    
   }
   

  ngOnInit(): void {
    //this.fgValidador.controls["usuario"].setValue("Hola:")
    //setInterval(() =>{
     // this.fgValidador.controls["usuario"].setValue(Math.random()*1000)

    //},2000)
  }
  secretkeyAES = 'E7)AwV<PK$[4';
  
IdentificarUsuario(){
   
  
  let email = this.fgValidador.controls["usuario"].value;
  let clave = this.fgValidador.controls["clave"].value;
  /*let claveCifrada = cryptoJS.AES.encrypt(clave, this.secretkeyAES).toString();*/
  this.servicioSeguridad.Identificar(email, clave).subscribe((datos:any) =>{
    
      
    console.log(datos);
    let data = Object.values(datos);
    console.log(data[0]);
    console.log(data[1]);
    //almacenar token
    this.servicioSeguridad.almecenar("token",datos);
    this.servicioSeguridad.AlmacenaSesion(datos);

    setTimeout(() =>{
      this.router.navigate(['/inicio'])
    },3000)

    //ok
    alert("DATOS INGRESADOS CORRECTAMENTE")
    //alert(email)
    //alert(clave)
  }, (error:any) => {
    
    //ok
    alert("DATOS INVALIDOS")
    alert(error.status + ' : ' + error.statusText);
    
    //alert(clave)

  })
 
}

}
