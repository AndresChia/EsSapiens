import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-cards',
  templateUrl: './column-cards.component.html',
  styleUrls: ['./column-cards.component.scss']
})
export class ColumnCardsComponent implements OnInit {

  @Input('estudiante') estudiante: boolean = true;
  @Input('entidad') entidad: boolean = true;
  @Input('conTitulo') conTitulo: boolean = true;


  constructor() { }

  ngOnInit() {
  }

}
