import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {


  // tslint:disable-next-line:no-input-rename
  @Input('tipoTarjeta') tipoTarjeta: string;


  constructor() { }

  ngOnInit() {
  }


}
