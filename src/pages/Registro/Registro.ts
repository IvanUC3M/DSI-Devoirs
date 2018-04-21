import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-registro',
  templateUrl: 'Registro.html'
})
export class RegistroPage {

  constructor(public navCtrl: NavController) {

  }
  irApp(){
      this.navCtrl.push(TabsPage);
    }
}
