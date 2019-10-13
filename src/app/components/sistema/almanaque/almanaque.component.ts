import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almanaque',
  templateUrl: './almanaque.component.html',
  styleUrls: ['./almanaque.component.css']
})
export class AlmanaqueComponent implements OnInit {


  diaSelecionado = "";
  nombreDia = "";

  constructor() { }

  ngOnInit() {
  }

  elegirFecha(evento, dia) {

    switch (dia) {
      case 1:
        this.nombreDia = "Domingo";
        break;
      case 2:
        this.nombreDia = "Lunes";

        break;
      case 3:
        this.nombreDia = "Martes";

        break;
      case 4:
        this.nombreDia = "Miercoles";

        break;
      case 5:
        this.nombreDia = "Jueves";

        break;
      case 6:
        this.nombreDia = "Viernes";

        break;
      case 7:
        this.nombreDia = "Sabado";

        break;

      default:
        break;
    }

    this.diaSelecionado = evento.srcElement.innerText;
  }
}
