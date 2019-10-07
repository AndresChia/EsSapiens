import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  tabActual = "Home";
  ListTabs: Array<any> = [
    {
      nombre: "Home"
    }
  ];

  menus: Array<any> = [
    {
      nombre: "Banco de datos"
    },
    {
      nombre: "Almanaque"
    },
    {
      nombre: "Horario"
    },
    {
      nombre: "Clases"
    },
    {
      nombre: "Parqueadero"
    },
    {
      nombre: "Biblioteca"
    },
    {
      nombre: "Medio universitario"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  cambioDeTabs(evento) {
    this.tabActual = evento.nombreTab.nombre;
  }
  cambioEnHeader(evento) {
    this.tabActual = evento.opcionMenu.nombre;
    if (!this.ListTabs.find(element => (element as any).nombre === this.tabActual)) {
      this.ListTabs.push(evento.opcionMenu);
    }
  }
  cerroTab(evento) {
    this.ListTabs.splice(evento.indiceCerrar, 1);
    this.tabActual = this.ListTabs[evento.indiceCerrar - 1].nombre;
  }


}
