import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicioActual = 3;

  informacionServicios = [{
    titulo: "Soporte",
    nombre: "Todo lo que quieres y como lo quieres",
    informacion: "Soporte 24/7 para garantizar que tu servicios esten siempre bajo tus condiciones, servicios de postventa y preventa.",
    img: "../../../assets/images/icon4.png"
  }, {
    titulo: "Disponibilidad",
    nombre: "Siempre a la mano de tu usuario",
    informacion: "Tus servicios siempre estaran disponibles, los servidores donde se aloja la información siempre estaran encendidos y pendientes de tus peticiones.",
    img: "../../../assets/images/icon2.png"
  }, {
    titulo: "Usabilidad",
    nombre: "Echo bajo tus exigencias",
    informacion: "Se realizara bajo tus peticiones y especificaciones para garantizar que tus clientes se sientan agradados con el uso.",
    img: "../../../assets/images/icon1.png"
  }, {
    titulo: "Seguridad",
    nombre: "Sin fugas de datos",
    informacion: "Tu información estara bajo proteccion siempre y los protocolos de intercambio estaran cifrados.",
    img: "../../../assets/images/icon3.png"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  hover(item, index) {
    this.servicioActual = index;
  }

}
