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
      nombre: "Banco de datos",
      icon: "icon-2"
    },
    {
      nombre: "Almanaque",
      icon: "icon-10"
    },
    {
      nombre: "Horario",
      icon: "icon-3"
    },
    {
      nombre: "Clases",
      icon: "icon-6"
    },
    {
      nombre: "Parqueadero",
      icon: "icon-7"
    },
    {
      nombre: "Biblioteca",
      icon: "icon-2"
    },
    {
      nombre: "Medio universitario",
      icon: "icon-1"
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
