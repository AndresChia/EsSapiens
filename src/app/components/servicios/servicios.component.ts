import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicioActual = 0;

  informacionServicios = [{
    nombre: ""
  }, {
    nombre: ""
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
