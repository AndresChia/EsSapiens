import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlarPestañasService implements OnInit {

  public rutaActual = "";

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.rutaActual = (event as NavigationStart).url;
      }
    });
  }

  public getRutaActual() {
    return this.rutaActual + "";
  }


  public getRutasSin() {


    if (this.rutaActual !== '/registro' &&
      this.rutaActual !== '/sapiens/home') {

      return true;

    } else {

      return false;
    }


  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    console.log("service on");
  }

}
