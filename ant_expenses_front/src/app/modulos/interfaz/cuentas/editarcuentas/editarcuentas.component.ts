import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCuentas } from 'src/app/modelos/cuentas.modelo';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editarcuentas',
  templateUrl: './editarcuentas.component.html',
  styleUrls: ['./editarcuentas.component.css']
})
export class EditarcuentasComponent implements OnInit {
  id:string = '';

  fgValidador:FormGroup= this.fb.group({
    'id':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'tipocuenta':['',[Validators.required]],
    'balance':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    
  })
  
  

  constructor(private fb: FormBuilder ,
    private cuentasservice:CuentasService,
    private router : Router,
    private route: ActivatedRoute) { 
    
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarCuenta();
  

  }
 BuscarCuenta(){
  this.cuentasservice.obtenercuentasporid(this.id).subscribe((datos:ModeloCuentas)=>{
  this.fgValidador.controls["id"].setValue(this.id);
  this.fgValidador.controls["nombre"].setValue(datos.nombre);
  this.fgValidador.controls["tipocuenta"].setValue(datos.tiposCuentasId);
  this.fgValidador.controls["balance"].setValue(datos.balance);
  this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
  });
 }
  
 editarCuenta(){
  let nombre = this.fgValidador.controls["nombre"].value
  let tipocuenta = this.fgValidador.controls["tipocuenta"].value
  let balance = this.fgValidador.controls["balance"].value
  let descripcion = this.fgValidador.controls["descripcion"].value
  let inp = new ModeloCuentas();
  inp.nombre = nombre;
  inp.tiposCuentasId= tipocuenta;
  inp.balance= balance;
  inp.descripcion= descripcion;
  inp.id = this.id; 

  this.cuentasservice.ActualizarCuenta(inp).subscribe((datos:ModeloCuentas)=>{
    console.log(datos);
    
    alert("cuenta actualizada correctamente");
  }, (error:any)=>{
    alert("error almacenando cuenta")
  })
}
}