import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit, OnChanges {

  @Output() cambioTabs = new EventEmitter();
  @Output() cerroTabs = new EventEmitter();

  @Input('tabs') tabs: Array<any>;
  @Input('indiceActual') indiceActual;


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.indiceActual && changes.indiceActual.currentValue) {
    }


  }

  constructor() { }

  ngOnInit() {
  }

  cambiarOpcion(event, indi, tab) {
    this.indiceActual = tab.nombre;
    this.cambioTabs.emit({ indice: indi, evento: event, nombreTab: this.tabs[indi] });
  }

  cerrarOpcion(tab, indice) {
    const index = this.tabs.findIndex(element => element.nombre === tab.nombre);
    if (index >= 0) {
      this.cerroTabs.emit({ tabCerrar: tab, indiceCerrar: indice });
    }
  }


}
