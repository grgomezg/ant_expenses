import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modelousuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  fgvalidador:FormGroup= this.fb.group({
    'nombre':['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    'apellido':['',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
    'email':['',[Validators.required,Validators.minLength(15),Validators.maxLength(20),Validators.email]],
    'clave':['',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]]
  })
  constructor(private fb: FormBuilder,private usuario: UsuarioService) {}

  ngOnInit(): void {
  }

  guardarUsuario(){
    let nombre = this.fgvalidador.controls["nombre"].value
    let apellido = this.fgvalidador.controls["apellido"].value
    let email = this.fgvalidador.controls["email"].value
    let clave = this.fgvalidador.controls["clave"].value
    let inUsuario = new Modelousuario();
    inUsuario.nombre = nombre;
    inUsuario.apellido= apellido
    inUsuario.email= email
    inUsuario.clave= clave
    this.usuario.CrearUsuario(inUsuario).subscribe((datos:any)=>{
      console.log(datos);
      alert("Proceso de registro completado satisfactoriamente")
    }
      
      // (datos:Modelousuario)=>{
    //   alert("Proceso de registro completado satisfactoriamente")
    // },(error:any)=>{
    //   alert("Ocurrio un error regstrando el usuario intenta otra vez")
    // }
    )
  }

}
