import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-carrito',
  templateUrl: 'Carrito.html'
})

export class CarritoPage {
  items = [
    'Patatas',
    'Tomate',
    'Lechuga',
    'Leche',
    'Cacao',
    'Papel',
    'Pan'
  ];
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController) {

  }


}
