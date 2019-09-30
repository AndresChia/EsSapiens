import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.css']
})
export class CardHorizontalComponent implements OnInit {

  faCoffee = faCoffee;

  titulos = ["Titulo1", "Titulo2", "Titulo3"];
  cuerpo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias."];
  boton = ["boton1", "boton2", "boton3"];
  images = ["home1.jpg", "home2.jpg", "home3.jpg"];
  opcionActual = 0;
  constructor() { }

  ngOnInit() {
  }


  moverCarrousel(movimiento) {

    if (movimiento === "izquierda") {

      if (this.opcionActual > 0) {
        this.opcionActual--;
      }

    }

    if (movimiento === "derecha") {

      if (this.titulos.length - 1 > this.opcionActual) {
        this.opcionActual++;

      }
    }

  }

}
