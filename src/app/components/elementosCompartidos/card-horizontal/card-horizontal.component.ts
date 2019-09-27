import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.css']
})
export class CardHorizontalComponent implements OnInit {

  faCoffee = faCoffee;


  constructor() { }

  ngOnInit() {
  }


  moverCarrousel(movimiento) {

  }

}
