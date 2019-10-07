import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sistema',
  templateUrl: './header-sistema.component.html',
  styleUrls: ['./header-sistema.component.css']
})
export class HeaderSistemaComponent implements OnInit {

  @Output() cambioHeader = new EventEmitter();
  @Input('menus') menus: Array<any>;


  constructor() { }

  ngOnInit() {
  }


  opcion(menu, indice) {
    this.cambioHeader.emit({ opcionMenu: menu, opcionIndice: indice });
  }

}
