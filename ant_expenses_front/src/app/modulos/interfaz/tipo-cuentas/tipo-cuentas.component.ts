import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tipo-cuentas',
  templateUrl: './tipo-cuentas.component.html',
  styleUrls: ['./tipo-cuentas.component.css'],
})
export class TipoCuentasComponent implements OnInit {
  cuentaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cuentaForm = this.fb.group({
      cuentatipo: ['', [Validators.required,Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  crearCuenta(){
    console.log(this.cuentaForm);

  }

}

