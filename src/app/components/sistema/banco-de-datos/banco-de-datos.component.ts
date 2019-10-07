import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-de-datos',
  templateUrl: './banco-de-datos.component.html',
  styleUrls: ['./banco-de-datos.component.css']
})
export class BancoDeDatosComponent implements OnInit {

  opcion = "Home";

  mostrarMas = false;
  constructor() { }

  ngOnInit() {
  }

  cambiarOpcion(opcion) {
    this.opcion = opcion;
  }

  masInfo() {
    this.mostrarMas = true;
  }
  cerrarMasInfo() {
    this.mostrarMas = false;

  }
}
