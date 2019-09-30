import { Component } from '@angular/core';
import { ControlarPestañasService } from './services/controlar-pestañas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(public controlar: ControlarPestañasService) { }

}
