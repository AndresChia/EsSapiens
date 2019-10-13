import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-de-datos',
  templateUrl: './banco-de-datos.component.html',
  styleUrls: ['./banco-de-datos.component.css']
})
export class BancoDeDatosComponent implements OnInit {


  elementActual = 0;

  files = [
    {
      nombreArchivo: "Parcial.doc",
      peso: "Size: 42KB",
      fecha: "Nov 02, 2019",
      autor: "Andres Chia"
    }, {
      nombreArchivo: "Quiz.doc",
      peso: "Size: 42KB",
      fecha: "Mar 09, 2019",
      autor: "Andres Chia"
    }, {
      nombreArchivo: "proyecto.doc",
      peso: "Size: 42KB",
      fecha: "Dic 01, 2019",
      autor: "Andres Chia"
    }, {
      nombreArchivo: "trabajo.doc",
      peso: "Size: 42KB",
      fecha: "Jun 12, 2019",
      autor: "Andres Chia"
    }, {
      nombreArchivo: "Document_2019.doc",
      peso: "Size: 42KB",
      fecha: "Dic 10, 2019"

    }, {
      nombreArchivo: "Doc.doc",
      peso: "Size: 42KB",
      fecha: "Ene 04, 2019",
      autor: "Andres Chia"
    }
  ];




  filesXsemestre = [
    {
      nombreArchivo: "Parcial.doc",
      peso: "Size: 42KB",
      fecha: "Nov 02, 2019",
      autor: "Andres Chia"
    }, {
      nombreArchivo: "Quiz.doc",
      peso: "Size: 42KB",
      fecha: "Mar 09, 2019",
      autor: "Andres Chia"
    }, {
      nombreArchivo: "proyecto.doc",
      peso: "Size: 42KB",
      fecha: "Dic 01, 2019",
      autor: "Andres Chia"
    }
  ];

  opcion = "Home";

  mostrarMas = false;
  constructor() { }

  ngOnInit() {
  }

  cambiarOpcion(opcion) {
    this.opcion = opcion;
  }

  masInfo(indice) {
    this.elementActual = indice;
    this.mostrarMas = true;
  }
  cerrarMasInfo() {
    this.mostrarMas = false;
  }

  upload(file: FileList) {


    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < file.length; index++) {

      const aux = {
        nombreArchivo: file[index].name,
        peso: "Size: " + (file[index].size / 10000) + "KB",
        fecha: "Ene 04, 2019",
        autor: "Andres Chia"
      };

      this.files.push(aux);
      this.filesXsemestre.push(aux);
    }



  }
}
