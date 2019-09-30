import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  tipoLicencia = "estudiante";
  buttonTarjetaTipo = "";
  tipoMetodoPago = "";
  constructor() { }

  ngOnInit() {
  }

  setPlan(valor) {
    this.tipoLicencia = valor;
  }

  seleccionarMetodoPago(tipo) {
    this.tipoMetodoPago = tipo;
  }

}
