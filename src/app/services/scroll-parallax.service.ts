import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollParallaxService {


  posY = 0;

  constructor() {


    window.addEventListener("scroll", () => {

      if (window.pageYOffset) {
        this.posY = window.pageYOffset;
      }


    });

  }

  efectoParallex(opcion?) {
    // tslint:disable-next-line:object-literal-key-quotes
    return { 'transform': 'translate(0px,' + this.posY + 'px)' };
  }

  efectoParallexFondo() {
    return this.posY + 'px';
  }

}
