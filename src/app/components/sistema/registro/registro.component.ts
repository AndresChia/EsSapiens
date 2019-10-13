import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  tipoLicencia = "estudiante";
  buttonTarjetaTipo = "";
  tipoMetodoPago = "";
  constructor(public _router: Router) { }


  router(parametro) {
    setTimeout(() => {
      this._router.navigateByUrl('/' + parametro);

    }, 1000);
  }
  ngOnInit() {
    document.getElementById("openModalButton").click();

  }

  setPlan(valor) {
    this.tipoLicencia = valor;
  }

  seleccionarMetodoPago(tipo) {
    this.tipoMetodoPago = tipo;
  }

}
