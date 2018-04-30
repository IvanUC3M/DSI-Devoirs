import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-carrito',
  templateUrl: 'Carrito.html'
})

export class CarritoPage {
  items: string[];
  elem: string;

  constructor(){
    this.items = ['Patatas','Tomate','Lechuga','Leche','Cacao','Papel','Pan'];
  }

  newitem(elem){
    this.items.push(elem.value);
    console.log(elem.value);
    return false;
}

  allItems(){
  this.items = [ ];
  return false;
}



}
