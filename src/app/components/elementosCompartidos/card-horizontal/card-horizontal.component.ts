import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.css']
})
export class CardHorizontalComponent implements OnInit {

  faCoffee = faCoffee;

  titulos = ["Software a la medida", "Soporte de software", "Banco gratuito de informacion"];
  cuerpo = ["Lleva todos los servicios que tiene tu entidad educativa a un solo lugar, gestiona y crea espacios dedicados a cubrir las necesidades de tus estudiantes y personal administrativo.",
    "Manten tu software actualizado y al pendiente de tus necesidades, con el soporte cubriran las necesidades cambiantes de tu plantel educativo.",
    "Como estudiante lo mas dificil es tener los elementos necesarios para estudiar, en un solo lugar encontraras todas las herramientas para poder iniciar."];
  boton = ["Contactanos", "Inicia sesion", "Registrate"];
  images = ["home1.jpg", "home2.jpg", "home3.jpg"];
  linksBotones = ['contactos', 'inicio-sesion', 'registro'];
  opcionActual = 0;
  constructor(public _router: Router) { }

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

  irA() {
    this._router.navigateByUrl('/' + this.linksBotones[this.opcionActual]);

  }

}
