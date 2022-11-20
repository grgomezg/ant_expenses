import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCuentas } from 'src/app/modelos/cuentas.modelo';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
  fgValidador:FormGroup= this.fb.group({
    'nombre':['',[Validators.required]],
    'tipocuenta':['',[Validators.required]],
    'balance':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    
  })
  cuenta : ModeloCuentas;
  listadocuentas = new Array<ModeloCuentas>();
  

  constructor(private fb: FormBuilder ,private cuentasservice:CuentasService,private router : Router) { 
    
    this.cuenta = new ModeloCuentas();
  }

  ngOnInit(): void {
    this.cuentasservice.obtenercuentas().subscribe((data:ModeloCuentas)=>{
      this.listadocuentas = Object.values (data);
  })
 
  }
  guardarCuenta(){
    let nombre = this.fgValidador.controls["nombre"].value
    let tipocuenta = this.fgValidador.controls["tipocuenta"].value
    let balance = this.fgValidador.controls["balance"].value
    let descripcion = this.fgValidador.controls["descripcion"].value
    let inp = new ModeloCuentas();
    inp.nombre = nombre;
    inp.tiposCuentasId= tipocuenta
    inp.balance= balance
    inp.descripcion= descripcion 
    this.cuentasservice.CrearCuenta(inp).subscribe((datos:ModeloCuentas)=>{
      console.log(datos);
      
      alert("Proceso de registro completado satisfactoriamente");
    }, (error:any)=>{
      alert("error almacenando cuenta")
    })
  }
  eliminar(id : string){
    alert(id);
    if(confirm("¿Desea eliminar la cuenta?")){
      
      this.cuentasservice.Eliminar(id).subscribe(result =>{
        alert("Se elimino la persona");
      this.cuentasservice.obtenerTodo().subscribe(data =>{
        this.listadocuentas = data;
      });
      
      }, error => {
        alert("la persona no existe")
      }
      )

    
    }

  }
  limpiar(){
    this.cuenta = new ModeloCuentas();
  }
  

}
